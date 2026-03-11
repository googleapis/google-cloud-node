# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/nodejs-spanner?activeTab=versions

## [8.6.0](https://github.com/googleapis/nodejs-spanner/compare/v8.5.0...v8.6.0) (2026-01-28)


### Features

* Refactor and deprecate databaseRole and Session Labels SessionPoolOptions ([#2511](https://github.com/googleapis/nodejs-spanner/issues/2511)) ([163534c](https://github.com/googleapis/nodejs-spanner/commit/163534c8545a3f1378b001eb118b12f98b4cc1e5))


### Bug Fixes

* Ensure all data is consumed before emitting end event in PartialResultStream ([#2516](https://github.com/googleapis/nodejs-spanner/issues/2516)) ([210ef50](https://github.com/googleapis/nodejs-spanner/commit/210ef506cd80f4604e4a135fdfe937190eab5750))

## [8.5.0](https://github.com/googleapis/nodejs-spanner/compare/v8.4.0...v8.5.0) (2026-01-22)


### Features

* Added OUTPUT_ONLY annotations to create_time and update_time in InternalRange to reflect existing service behavior ([#2505](https://github.com/googleapis/nodejs-spanner/issues/2505)) ([1058683](https://github.com/googleapis/nodejs-spanner/commit/105868339b1d2b7d7701a6b7591b85e3a1ca4098))


### Bug Fixes

* UUID type backward compatibility ([#2509](https://github.com/googleapis/nodejs-spanner/issues/2509)) ([7abb33c](https://github.com/googleapis/nodejs-spanner/commit/7abb33ca523b612f171def64c1ceb0cb7d162e82))

## [8.4.0](https://github.com/googleapis/nodejs-spanner/compare/v8.3.1...v8.4.0) (2026-01-09)


### Features

* Add a ClientContext field to Spanner requests ([#2493](https://github.com/googleapis/nodejs-spanner/issues/2493)) ([37504ad](https://github.com/googleapis/nodejs-spanner/commit/37504adcc37a7e95acfb2530313ff783d0c1fe7d))
* Exposing total CPU related fields in AutoscalingConfig ([#2490](https://github.com/googleapis/nodejs-spanner/issues/2490)) ([508f0ff](https://github.com/googleapis/nodejs-spanner/commit/508f0ff95636b004f4200522018a199263eda8ca))
* **spanner:** Support for type UUID ([#2482](https://github.com/googleapis/nodejs-spanner/issues/2482)) ([0047e94](https://github.com/googleapis/nodejs-spanner/commit/0047e9407d86521571626c69011b70307f83f8ba))


### Bug Fixes

* **deps:** Update dependency google-gax to v5.0.6 ([#2452](https://github.com/googleapis/nodejs-spanner/issues/2452)) ([f9e6b86](https://github.com/googleapis/nodejs-spanner/commit/f9e6b86ff4da03110642c17e5ebc8fac8d903d3a))
* Flaky metric test ([#2472](https://github.com/googleapis/nodejs-spanner/issues/2472)) ([e169cc5](https://github.com/googleapis/nodejs-spanner/commit/e169cc5344d38812b1ebf20c7a987715a73d6f79))
* Memory leak and deadlock due to error event in multiplexed session ([#2477](https://github.com/googleapis/nodejs-spanner/issues/2477)) ([c624619](https://github.com/googleapis/nodejs-spanner/commit/c624619a3960892b1d2d412ff79faa5a74de45df))
* Presubmit failure for samples backups test ([#2492](https://github.com/googleapis/nodejs-spanner/issues/2492)) ([01eb3d5](https://github.com/googleapis/nodejs-spanner/commit/01eb3d5801ddb21517f185b9d585fbce4fa1475c))
* Type check for key in deleteRows ([#2486](https://github.com/googleapis/nodejs-spanner/issues/2486)) ([7347a16](https://github.com/googleapis/nodejs-spanner/commit/7347a1628ad8635b8f84b36ad1d3850b78862ac7))
* Type mismatch in Snapshot.run error handler ([#2487](https://github.com/googleapis/nodejs-spanner/issues/2487)) ([4ac0360](https://github.com/googleapis/nodejs-spanner/commit/4ac036047e3a03c073300f288c746389a38d8e42))

## [8.3.1](https://github.com/googleapis/nodejs-spanner/compare/v8.3.0...v8.3.1) (2025-11-19)


### Bug Fixes

* Remove Console logging ([e673acd](https://github.com/googleapis/nodejs-spanner/commit/e673acdba717380d25eca6d978272c43950eb1e8))

## [8.3.0](https://github.com/googleapis/nodejs-spanner/compare/v8.2.2...v8.3.0) (2025-11-11)


### Features

* Exposing AutoscalingConfig in InstancePartition ([#2449](https://github.com/googleapis/nodejs-spanner/issues/2449)) ([2defcc8](https://github.com/googleapis/nodejs-spanner/commit/2defcc81de4191293cd2d4aa493a0a9dc68f37ce))
* Multiplexed session as default session mode ([#2451](https://github.com/googleapis/nodejs-spanner/issues/2451)) ([9ef0565](https://github.com/googleapis/nodejs-spanner/commit/9ef0565ca2cc9af18477503b43a506fd7c0c3c33))


### Bug Fixes

* Configure gRPC keep alive as 120 sec ([#2445](https://github.com/googleapis/nodejs-spanner/issues/2445)) ([f280e7c](https://github.com/googleapis/nodejs-spanner/commit/f280e7ca7cc60a67da8a5a0b3ada5f414c9e9a5f))
* **deps:** Update dependency google-gax to v5.0.4 ([#2430](https://github.com/googleapis/nodejs-spanner/issues/2430)) ([4cbed94](https://github.com/googleapis/nodejs-spanner/commit/4cbed94dd74567f12620a493cebace5b2c9196bc))

## [8.2.2](https://github.com/googleapis/nodejs-spanner/compare/v8.2.1...v8.2.2) (2025-10-07)


### Bug Fixes

* Correctly determine project ID for metrics export ([#2427](https://github.com/googleapis/nodejs-spanner/issues/2427)) ([0d63312](https://github.com/googleapis/nodejs-spanner/commit/0d633126a87c1274abfd59550cb94052a819fcaa))
* Metrics Export Error log ([#2425](https://github.com/googleapis/nodejs-spanner/issues/2425)) ([110923e](https://github.com/googleapis/nodejs-spanner/commit/110923ea1dc6f6c891e0f70406b3839224a25b9e))

## [8.2.1](https://github.com/googleapis/nodejs-spanner/compare/v8.2.0...v8.2.1) (2025-09-12)


### Bug Fixes

* **deps:** Update dependency google-gax to v5.0.3 ([#2371](https://github.com/googleapis/nodejs-spanner/issues/2371)) ([8a175e2](https://github.com/googleapis/nodejs-spanner/commit/8a175e2e5cc8d0ed81faee7b24b59b5026758a59))
* Disable afe_connectivity_error_count metric ([af72d70](https://github.com/googleapis/nodejs-spanner/commit/af72d707c8857d5596bd2b93830e52c8e152967f))

## [8.2.0](https://github.com/googleapis/nodejs-spanner/compare/v8.1.0...v8.2.0) (2025-08-26)


### Features

* **spanner:** Add support for multiplexed session for r/w transactions ([#2351](https://github.com/googleapis/nodejs-spanner/issues/2351)) ([6a9f1a2](https://github.com/googleapis/nodejs-spanner/commit/6a9f1a2b2c0dad955593571c71e9d4b6c9e7eeee))
* **spanner:** Support setting read lock mode ([#2388](https://github.com/googleapis/nodejs-spanner/issues/2388)) ([bd66f61](https://github.com/googleapis/nodejs-spanner/commit/bd66f61f3ecac65678d31cbc841c11cd0fb7c3da))


### Bug Fixes

* **deps:** Add uuid to dependencies ([#2376](https://github.com/googleapis/nodejs-spanner/issues/2376)) ([0b2060b](https://github.com/googleapis/nodejs-spanner/commit/0b2060b4ad7302ab23ac757e79fe760e34e81083))
* **deps:** Update dependency @grpc/proto-loader to ^0.8.0 ([#2354](https://github.com/googleapis/nodejs-spanner/issues/2354)) ([75dc4da](https://github.com/googleapis/nodejs-spanner/commit/75dc4daf114cbc4eb4669ed6cb042af051cdce63))
* **deps:** Update dependency google-gax to v5.0.1 ([#2362](https://github.com/googleapis/nodejs-spanner/issues/2362)) ([9223470](https://github.com/googleapis/nodejs-spanner/commit/922347014ac3966ec4a48116b61ba4850edf0b50))
* Provide option to disable built in metrics ([#2380](https://github.com/googleapis/nodejs-spanner/issues/2380)) ([b378e2e](https://github.com/googleapis/nodejs-spanner/commit/b378e2ed6739acf76f3f3f27090311129dd83473))
* Race condition among transactions when running parallely ([#2369](https://github.com/googleapis/nodejs-spanner/issues/2369)) ([f8b6f63](https://github.com/googleapis/nodejs-spanner/commit/f8b6f6340f4f04e04213fdf0a9665d643f474eeb))

## [8.1.0](https://github.com/googleapis/nodejs-spanner/compare/v8.0.0...v8.1.0) (2025-07-28)


### Features

* Add Custom OpenTelemetry Exporter in for Service Metrics ([#2272](https://github.com/googleapis/nodejs-spanner/issues/2272)) ([610d1b9](https://github.com/googleapis/nodejs-spanner/commit/610d1b989ba186c0758791343deaa7f683c4bd26))
* Add methods from gax to cache proto root and process custom error details ([#2330](https://github.com/googleapis/nodejs-spanner/issues/2330)) ([1b3931a](https://github.com/googleapis/nodejs-spanner/commit/1b3931a799bdd052adc91703e59e1d0c83270065))
* Add metrics tracers ([#2319](https://github.com/googleapis/nodejs-spanner/issues/2319)) ([192bf2b](https://github.com/googleapis/nodejs-spanner/commit/192bf2bb603bca4ac481fcfd1f04974173adc6a1))
* Add support for AFE latency metrics ([#2348](https://github.com/googleapis/nodejs-spanner/issues/2348)) ([0666f05](https://github.com/googleapis/nodejs-spanner/commit/0666f05d589e2f229b44dffae8e9649220bccf8b))
* Add throughput_mode to UpdateDatabaseDdlRequest to be used by Spanner Migration Tool. See https://github.com/GoogleCloudPlatform/spanner-migration-tool ([#2304](https://github.com/googleapis/nodejs-spanner/issues/2304)) ([a29af56](https://github.com/googleapis/nodejs-spanner/commit/a29af56ae3c31f07115cb938bcf3f0f77241b725))
* Operation, Attempt, and GFE metrics ([#2328](https://github.com/googleapis/nodejs-spanner/issues/2328)) ([646e6ea](https://github.com/googleapis/nodejs-spanner/commit/646e6ea6f1dc5fa1937e512ae9e81ae4d2637ed0))
* Proto changes for an internal api ([#2356](https://github.com/googleapis/nodejs-spanner/issues/2356)) ([380e770](https://github.com/googleapis/nodejs-spanner/commit/380e7705a23a692168db386ba5426c91bf1587b6))
* **spanner:** A new field `snapshot_timestamp` is added to message `.google.spanner.v1.CommitResponse` ([#2350](https://github.com/googleapis/nodejs-spanner/issues/2350)) ([0875cd8](https://github.com/googleapis/nodejs-spanner/commit/0875cd82e99fa6c95ab38807e09c5921303775f8))
* **spanner:** Add new change_stream.proto ([#2315](https://github.com/googleapis/nodejs-spanner/issues/2315)) ([57d67be](https://github.com/googleapis/nodejs-spanner/commit/57d67be2e3b6d6ac2a8a903acf8613b27a049c3b))
* **spanner:** Add tpc support ([#2333](https://github.com/googleapis/nodejs-spanner/issues/2333)) ([a381cab](https://github.com/googleapis/nodejs-spanner/commit/a381cab92c31373a6a10edca0f8a8bdfc4415e4b))
* Track precommit token in r/w apis(multiplexed session) ([#2312](https://github.com/googleapis/nodejs-spanner/issues/2312)) ([3676bfa](https://github.com/googleapis/nodejs-spanner/commit/3676bfa60725c43f85a04ead87943be92e4a99f0))


### Bug Fixes

* Docs-test ([#2297](https://github.com/googleapis/nodejs-spanner/issues/2297)) ([61c571c](https://github.com/googleapis/nodejs-spanner/commit/61c571c729c2a065df6ff166db784a6e6eaef74d))
* Ensure context propagation works in Node.js 22 with async/await ([#2326](https://github.com/googleapis/nodejs-spanner/issues/2326)) ([e8cdbed](https://github.com/googleapis/nodejs-spanner/commit/e8cdbedd55f049b8c7766e97388ed045fedd1b4e))
* Pass the Span correctly ([#2332](https://github.com/googleapis/nodejs-spanner/issues/2332)) ([edaee77](https://github.com/googleapis/nodejs-spanner/commit/edaee7791b2d814f749ed35119dd705924984a78))
* System test against emulator ([#2339](https://github.com/googleapis/nodejs-spanner/issues/2339)) ([2a6af4c](https://github.com/googleapis/nodejs-spanner/commit/2a6af4c36484f44929a2fac80d8f225dad5d702c))
* Unhandled exceptions from gax ([#2338](https://github.com/googleapis/nodejs-spanner/issues/2338)) ([6428bcd](https://github.com/googleapis/nodejs-spanner/commit/6428bcd2980852c1bdbc4c3d0ab210a139e5f193))


### Performance Improvements

* Skip gRPC trailers for StreamingRead & ExecuteStreamingSql ([#2313](https://github.com/googleapis/nodejs-spanner/issues/2313)) ([8bd0781](https://github.com/googleapis/nodejs-spanner/commit/8bd0781e8b434a421f0e0f3395439a5a86c7847c))

## [8.0.0](https://github.com/googleapis/nodejs-spanner/compare/v7.21.0...v8.0.0) (2025-05-12)


### ⚠ BREAKING CHANGES

* remove the arrify package  ([#2292](https://github.com/googleapis/nodejs-spanner/issues/2292))
* migrate to Node 18 ([#2271](https://github.com/googleapis/nodejs-spanner/issues/2271))

### Features

* Add promise based signatures for createQueryPartitions ([#2284](https://github.com/googleapis/nodejs-spanner/issues/2284)) ([255d8a6](https://github.com/googleapis/nodejs-spanner/commit/255d8a6a5749b6a05cd87dd7444cab7dd75d3e42))
* Add promise based signatures on createReadPartitions ([#2300](https://github.com/googleapis/nodejs-spanner/issues/2300)) ([7b8a1f7](https://github.com/googleapis/nodejs-spanner/commit/7b8a1f70f0de3aa5886a2cde9325c9a36222a311))
* Support promise based signatures for execute method ([#2301](https://github.com/googleapis/nodejs-spanner/issues/2301)) ([bb857e1](https://github.com/googleapis/nodejs-spanner/commit/bb857e18459f717d67b9b3d144c2b022178363cb))


### Bug Fixes

* **deps:** Update dependency @google-cloud/kms to v5 ([#2289](https://github.com/googleapis/nodejs-spanner/issues/2289)) ([1ccb505](https://github.com/googleapis/nodejs-spanner/commit/1ccb505935e70b6f576f06e566325146ee68f3ff))
* **deps:** Update dependency @google-cloud/precise-date to v5 ([#2290](https://github.com/googleapis/nodejs-spanner/issues/2290)) ([44f7575](https://github.com/googleapis/nodejs-spanner/commit/44f7575efd3751d0595beef2ec4eb9f39bc426d7))
* **deps:** Update dependency big.js to v7 ([#2286](https://github.com/googleapis/nodejs-spanner/issues/2286)) ([0911297](https://github.com/googleapis/nodejs-spanner/commit/0911297cc33aec93c09ef2be42413f20c75fc2bf))


### Miscellaneous Chores

* Migrate to Node 18 ([#2271](https://github.com/googleapis/nodejs-spanner/issues/2271)) ([cab3f22](https://github.com/googleapis/nodejs-spanner/commit/cab3f229ccb2189bd5af0c25a3006b553f8a5453))
* Remove the arrify package  ([#2292](https://github.com/googleapis/nodejs-spanner/issues/2292)) ([e8f5ca1](https://github.com/googleapis/nodejs-spanner/commit/e8f5ca15125d570949769e6e66f0d911cb21f58d))

## [7.21.0](https://github.com/googleapis/nodejs-spanner/compare/v7.20.0...v7.21.0) (2025-04-15)


### Features

* Adding sample for pre-split feature ([#2274](https://github.com/googleapis/nodejs-spanner/issues/2274)) ([3d5f080](https://github.com/googleapis/nodejs-spanner/commit/3d5f08065fdf40a1c441d97a049d7dacf1a5be93))


### Bug Fixes

* Adding span attributes for request tag and transaction tag ([#2236](https://github.com/googleapis/nodejs-spanner/issues/2236)) ([3f69dad](https://github.com/googleapis/nodejs-spanner/commit/3f69dad36cfdeb4effd191e0d38079ead1bd6654))

## [7.20.0](https://github.com/googleapis/nodejs-spanner/compare/v7.19.1...v7.20.0) (2025-04-11)


### Features

* Add support for Interval ([#2192](https://github.com/googleapis/nodejs-spanner/issues/2192)) ([8c886cb](https://github.com/googleapis/nodejs-spanner/commit/8c886cbc0d7523fb99e65cfc5d8f565b630e26f0))
* **debugging:** Implement x-goog-spanner-request-id propagation per request ([#2205](https://github.com/googleapis/nodejs-spanner/issues/2205)) ([e42caea](https://github.com/googleapis/nodejs-spanner/commit/e42caeaaa656c395d240f4af412ddb947f29c59b))
* **spanner:** Add support for snapshot isolation ([#2245](https://github.com/googleapis/nodejs-spanner/issues/2245)) ([b60a683](https://github.com/googleapis/nodejs-spanner/commit/b60a683c0e1ddbf704766eb99f102fed925a348c))
* **spanner:** Support for Multiplexed Session Partitioned Ops ([#2252](https://github.com/googleapis/nodejs-spanner/issues/2252)) ([e7ce471](https://github.com/googleapis/nodejs-spanner/commit/e7ce471332f6e73614638b96ed54c87095d785a2))

## [7.19.1](https://github.com/googleapis/nodejs-spanner/compare/v7.19.0...v7.19.1) (2025-03-13)


### Bug Fixes

* CreateQueryPartition with query params ([91f5afd](https://github.com/googleapis/nodejs-spanner/commit/91f5afda53bd9c46fcd1a1fe33f579b6aed5223a))

## [7.19.0](https://github.com/googleapis/nodejs-spanner/compare/v7.18.1...v7.19.0) (2025-02-26)


### Features

* Add AddSplitPoints API ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* Paging changes for bigquery ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* **spanner:** A new enum `IsolationLevel` is added ([#2225](https://github.com/googleapis/nodejs-spanner/issues/2225)) ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* **spanner:** A new field `isolation_level` is added to message `.google.spanner.v1.TransactionOptions` ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* **spanner:** Add instance partitions field in backup proto ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* **spanner:** Add support for Multiplexed Session for Read Only Tran… ([#2214](https://github.com/googleapis/nodejs-spanner/issues/2214)) ([3a7a51b](https://github.com/googleapis/nodejs-spanner/commit/3a7a51bee00730c2daf1b9791b45f75531c14a2c))
* **x-goog-spanner-request-id:** Add bases ([#2211](https://github.com/googleapis/nodejs-spanner/issues/2211)) ([0008038](https://github.com/googleapis/nodejs-spanner/commit/000803812e670ce0f4bac4a6460351f2b08ec660))


### Bug Fixes

* Add x-goog-request params to headers for LRO-polling methods ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* Error from fill method should not be emitted ([#2233](https://github.com/googleapis/nodejs-spanner/issues/2233)) ([2cc44cf](https://github.com/googleapis/nodejs-spanner/commit/2cc44cf238bd18f5a456c76ddb8280c2252c2e87)), closes [#2103](https://github.com/googleapis/nodejs-spanner/issues/2103)
* Finalize fixing typings for headers in generator ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* Fix typings for headers in generator ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* Remove extra protos in ESM & capture ESM in headers ([e4d389a](https://github.com/googleapis/nodejs-spanner/commit/e4d389a23ff4b73b2d0774ad31a84c9a6c19e306))
* Rollback with no id ([#2231](https://github.com/googleapis/nodejs-spanner/issues/2231)) ([a6919b1](https://github.com/googleapis/nodejs-spanner/commit/a6919b15bd01ed93c62d32533d78181cbd333f5e)), closes [#2103](https://github.com/googleapis/nodejs-spanner/issues/2103)

## [7.18.1](https://github.com/googleapis/nodejs-spanner/compare/v7.18.0...v7.18.1) (2025-02-05)


### Bug Fixes

* Fix NodeJS release ([#2229](https://github.com/googleapis/nodejs-spanner/issues/2229)) ([f830fc8](https://github.com/googleapis/nodejs-spanner/commit/f830fc82ce666902db3cddc667326dc2731c14a1))

## [7.18.0](https://github.com/googleapis/nodejs-spanner/compare/v7.17.1...v7.18.0) (2025-01-29)


### Features

* Add gcp client attributes for Opentelemetry traces ([#2215](https://github.com/googleapis/nodejs-spanner/issues/2215)) ([d2ff046](https://github.com/googleapis/nodejs-spanner/commit/d2ff046854b4139af6e3a6f0d2122619cdf83131))

## [7.17.1](https://github.com/googleapis/nodejs-spanner/compare/v7.17.0...v7.17.1) (2025-01-03)


### Bug Fixes

* Remove default global trace context propagator ([#2209](https://github.com/googleapis/nodejs-spanner/issues/2209)) ([7898e0c](https://github.com/googleapis/nodejs-spanner/commit/7898e0ce0477e2d4327822ac26a2674203b47a64)), closes [#2208](https://github.com/googleapis/nodejs-spanner/issues/2208)

## [7.17.0](https://github.com/googleapis/nodejs-spanner/compare/v7.16.0...v7.17.0) (2024-12-27)


### Features

* Add the last statement option to ExecuteSqlRequest and ExecuteBatchDmlRequest ([#2196](https://github.com/googleapis/nodejs-spanner/issues/2196)) ([223f167](https://github.com/googleapis/nodejs-spanner/commit/223f167c1c9bc4da26155637eabbcabce5487ede))
* Enable e2e tracing ([#2202](https://github.com/googleapis/nodejs-spanner/issues/2202)) ([3cc257e](https://github.com/googleapis/nodejs-spanner/commit/3cc257e99925594776b9a1886f0173ce2dfe904f))


### Bug Fixes

* Span events Issue 2166 ([#2184](https://github.com/googleapis/nodejs-spanner/issues/2184)) ([97ed577](https://github.com/googleapis/nodejs-spanner/commit/97ed5776dbdf5e90f8398fffea08e2a968045f9b))

## [7.16.0](https://github.com/googleapis/nodejs-spanner/compare/v7.15.0...v7.16.0) (2024-11-09)


### Features

* **spanner:** Add support for Cloud Spanner Default Backup Schedules ([#2135](https://github.com/googleapis/nodejs-spanner/issues/2135)) ([19f137c](https://github.com/googleapis/nodejs-spanner/commit/19f137c870796d60902be8d9d3a82f4abcfc693f))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.4.1 ([#2100](https://github.com/googleapis/nodejs-spanner/issues/2100)) ([2e94bcd](https://github.com/googleapis/nodejs-spanner/commit/2e94bcd06d99a98c7767281e8035d000e186692b))

## [7.15.0](https://github.com/googleapis/nodejs-spanner/compare/v7.14.0...v7.15.0) (2024-10-30)


### Features

* (observability, samples): add tracing end-to-end sample ([#2130](https://github.com/googleapis/nodejs-spanner/issues/2130)) ([66d99e8](https://github.com/googleapis/nodejs-spanner/commit/66d99e836cd2bfbb3b0f78980ec2b499f9e5e563))
* (observability) add spans for BatchTransaction and Table ([#2115](https://github.com/googleapis/nodejs-spanner/issues/2115)) ([d51aae9](https://github.com/googleapis/nodejs-spanner/commit/d51aae9c9c3c0e6319d81c2809573ae54675acf3)), closes [#2114](https://github.com/googleapis/nodejs-spanner/issues/2114)
* (observability) Add support for OpenTelemetry traces and allow observability options to be passed.  ([#2131](https://github.com/googleapis/nodejs-spanner/issues/2131)) ([5237e11](https://github.com/googleapis/nodejs-spanner/commit/5237e118befb4b7fe4aea76a80a91e822d7a22e4)), closes [#2079](https://github.com/googleapis/nodejs-spanner/issues/2079)
* (observability) propagate database name for every span generated to aid in quick debugging ([#2155](https://github.com/googleapis/nodejs-spanner/issues/2155)) ([0342e74](https://github.com/googleapis/nodejs-spanner/commit/0342e74721a0684d8195a6299c3a634eefc2b522))
* (observability) trace Database.batchCreateSessions + SessionPool.createSessions ([#2145](https://github.com/googleapis/nodejs-spanner/issues/2145)) ([f489c94](https://github.com/googleapis/nodejs-spanner/commit/f489c9479fa5402f0c960cf896fd3be0e946f182))
* (observability): trace Database.runPartitionedUpdate ([#2176](https://github.com/googleapis/nodejs-spanner/issues/2176)) ([701e226](https://github.com/googleapis/nodejs-spanner/commit/701e22660d5ac9f0b3e940ad656b9ca6c479251d)), closes [#2079](https://github.com/googleapis/nodejs-spanner/issues/2079)
* (observability): trace Database.runTransactionAsync ([#2167](https://github.com/googleapis/nodejs-spanner/issues/2167)) ([d0fe178](https://github.com/googleapis/nodejs-spanner/commit/d0fe178623c1c48245d11bcea97fcd340b6615af)), closes [#207](https://github.com/googleapis/nodejs-spanner/issues/207)
* Allow multiple KMS keys to create CMEK database/backup ([#2099](https://github.com/googleapis/nodejs-spanner/issues/2099)) ([51bc8a7](https://github.com/googleapis/nodejs-spanner/commit/51bc8a7445ab8b3d2239493b69d9c271c1086dde))
* **observability:** Fix bugs found from product review + negative cases ([#2158](https://github.com/googleapis/nodejs-spanner/issues/2158)) ([cbc86fa](https://github.com/googleapis/nodejs-spanner/commit/cbc86fa80498af6bd745eebb9443612936e26d4e))
* **observability:** Trace Database methods ([#2119](https://github.com/googleapis/nodejs-spanner/issues/2119)) ([1f06871](https://github.com/googleapis/nodejs-spanner/commit/1f06871f7aca386756e8691013602b069697bb87)), closes [#2114](https://github.com/googleapis/nodejs-spanner/issues/2114)
* **observability:** Trace Database.batchWriteAtLeastOnce ([#2157](https://github.com/googleapis/nodejs-spanner/issues/2157)) ([2a19ef1](https://github.com/googleapis/nodejs-spanner/commit/2a19ef1af4f6fd1b81d08afc15db76007859a0b9)), closes [#2079](https://github.com/googleapis/nodejs-spanner/issues/2079)
* **observability:** Trace Transaction ([#2122](https://github.com/googleapis/nodejs-spanner/issues/2122)) ([a464bdb](https://github.com/googleapis/nodejs-spanner/commit/a464bdb5cbb7856b7a08dac3ff48132948b65792)), closes [#2114](https://github.com/googleapis/nodejs-spanner/issues/2114)


### Bug Fixes

* Exact staleness timebound ([#2143](https://github.com/googleapis/nodejs-spanner/issues/2143)) ([f01516e](https://github.com/googleapis/nodejs-spanner/commit/f01516ec6ba44730622cfb050c52cd93f30bba7a)), closes [#2129](https://github.com/googleapis/nodejs-spanner/issues/2129)
* GetMetadata for Session ([#2124](https://github.com/googleapis/nodejs-spanner/issues/2124)) ([2fd63ac](https://github.com/googleapis/nodejs-spanner/commit/2fd63acb87ce06a02d7fdfa78d836dbd7ad59a26)), closes [#2123](https://github.com/googleapis/nodejs-spanner/issues/2123)

## [7.14.0](https://github.com/googleapis/nodejs-spanner/compare/v7.13.0...v7.14.0) (2024-08-14)


### Features

* **spanner:** Add resource reference annotation to backup schedules ([#2093](https://github.com/googleapis/nodejs-spanner/issues/2093)) ([df539e6](https://github.com/googleapis/nodejs-spanner/commit/df539e665fe5d8fe01084b8d8cf6094c89b13d48))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.3.9 ([#2094](https://github.com/googleapis/nodejs-spanner/issues/2094)) ([487efc0](https://github.com/googleapis/nodejs-spanner/commit/487efc091e0e143d3c59ac63d66005133b1ef2e5))

## [7.13.0](https://github.com/googleapis/nodejs-spanner/compare/v7.12.0...v7.13.0) (2024-08-09)


### Features

* **spanner:** Add support for Cloud Spanner Incremental Backups ([#2085](https://github.com/googleapis/nodejs-spanner/issues/2085)) ([33b9645](https://github.com/googleapis/nodejs-spanner/commit/33b9645d6096e0d77d30fab6aadf5d92da973a67))


### Bug Fixes

* Unhandled exception error catch ([#2091](https://github.com/googleapis/nodejs-spanner/issues/2091)) ([e277752](https://github.com/googleapis/nodejs-spanner/commit/e277752fad961908e37e37d88d7b6a61d61a078e))

## [7.12.0](https://github.com/googleapis/nodejs-spanner/compare/v7.11.0...v7.12.0) (2024-08-02)


### Features

* Grpc keep alive settings ([#2086](https://github.com/googleapis/nodejs-spanner/issues/2086)) ([7712c35](https://github.com/googleapis/nodejs-spanner/commit/7712c35be21863015bb709f5f89d9ef0bb656024))

## [7.11.0](https://github.com/googleapis/nodejs-spanner/compare/v7.10.0...v7.11.0) (2024-07-29)


### Features

* Add support for blind writes ([#2065](https://github.com/googleapis/nodejs-spanner/issues/2065)) ([62fc0a4](https://github.com/googleapis/nodejs-spanner/commit/62fc0a47327017c115466b9e89e53dbd778579af))
* **spanner:** Add samples for instance partitions ([#2083](https://github.com/googleapis/nodejs-spanner/issues/2083)) ([b91e284](https://github.com/googleapis/nodejs-spanner/commit/b91e2849056df9894e0590cb71e21c13319e6d70))

## [7.10.0](https://github.com/googleapis/nodejs-spanner/compare/v7.9.1...v7.10.0) (2024-07-19)


### Features

* Add field lock_hint in spanner.proto ([47520e9](https://github.com/googleapis/nodejs-spanner/commit/47520e927b0fdcc60cb67378b8b49f44329f210b))
* Add field order_by in spanner.proto ([47520e9](https://github.com/googleapis/nodejs-spanner/commit/47520e927b0fdcc60cb67378b8b49f44329f210b))
* Add QueryCancellationAction message in executor protos ([47520e9](https://github.com/googleapis/nodejs-spanner/commit/47520e927b0fdcc60cb67378b8b49f44329f210b))
* Add support for change streams transaction exclusion option for Batch Write ([#2070](https://github.com/googleapis/nodejs-spanner/issues/2070)) ([2a9e443](https://github.com/googleapis/nodejs-spanner/commit/2a9e44328acda310db2d0d65d32ad82d77a9fcb0))
* **spanner:** Add support for Cloud Spanner Scheduled Backups ([#2045](https://github.com/googleapis/nodejs-spanner/issues/2045)) ([47520e9](https://github.com/googleapis/nodejs-spanner/commit/47520e927b0fdcc60cb67378b8b49f44329f210b))
* Update Nodejs generator to send API versions in headers for GAPICs ([47520e9](https://github.com/googleapis/nodejs-spanner/commit/47520e927b0fdcc60cb67378b8b49f44329f210b))


### Bug Fixes

* Callback in getDatabaseDialect ([#2078](https://github.com/googleapis/nodejs-spanner/issues/2078)) ([7e4a8e9](https://github.com/googleapis/nodejs-spanner/commit/7e4a8e9ad4f785b15b68aaa06b6480098d7995ba))
* **deps:** Update dependency google-gax to v4.3.8 ([#2077](https://github.com/googleapis/nodejs-spanner/issues/2077)) ([e927880](https://github.com/googleapis/nodejs-spanner/commit/e927880ff786a2528a2bbb063a244af3c42ff69c))

## [7.9.1](https://github.com/googleapis/nodejs-spanner/compare/v7.9.0...v7.9.1) (2024-06-26)


### Bug Fixes

* Retry with timeout ([#2071](https://github.com/googleapis/nodejs-spanner/issues/2071)) ([a943257](https://github.com/googleapis/nodejs-spanner/commit/a943257a0402b26fd80196057a9724fd28fc5c1b))

## [7.9.0](https://github.com/googleapis/nodejs-spanner/compare/v7.8.0...v7.9.0) (2024-06-21)


### Features

* **spanner:** Add support for batchWrite ([#2054](https://github.com/googleapis/nodejs-spanner/issues/2054)) ([06aab6e](https://github.com/googleapis/nodejs-spanner/commit/06aab6e39bbce9e3786f1ac631c80e8909197e92))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.3.4 ([#2051](https://github.com/googleapis/nodejs-spanner/issues/2051)) ([80abf06](https://github.com/googleapis/nodejs-spanner/commit/80abf06ba8ef9497318ffc597b83fb63e4408f9c))
* **deps:** Update dependency google-gax to v4.3.5 ([#2055](https://github.com/googleapis/nodejs-spanner/issues/2055)) ([702c9b0](https://github.com/googleapis/nodejs-spanner/commit/702c9b0f34e6cc34233c5aa52b97601b19f70980))
* **deps:** Update dependency google-gax to v4.3.6 ([#2057](https://github.com/googleapis/nodejs-spanner/issues/2057)) ([74ebf1e](https://github.com/googleapis/nodejs-spanner/commit/74ebf1e45cddf614c180295f3a761a8f84c5cb32))
* **deps:** Update dependency google-gax to v4.3.7 ([#2068](https://github.com/googleapis/nodejs-spanner/issues/2068)) ([28fec6c](https://github.com/googleapis/nodejs-spanner/commit/28fec6ca505d78d725efc123950be978e0c84ab7))

## [7.8.0](https://github.com/googleapis/nodejs-spanner/compare/v7.7.0...v7.8.0) (2024-05-24)


### Features

* Add `RESOURCE_EXHAUSTED` to the list of retryable error codes ([#2032](https://github.com/googleapis/nodejs-spanner/issues/2032)) ([a4623c5](https://github.com/googleapis/nodejs-spanner/commit/a4623c560c16fa1f37a06cb57a5e47a1d6759d27))
* Add support for multi region encryption config ([81fa610](https://github.com/googleapis/nodejs-spanner/commit/81fa610895fe709cbb7429896493a67407a6343c))
* Add support for Proto columns ([#1991](https://github.com/googleapis/nodejs-spanner/issues/1991)) ([ae59c7f](https://github.com/googleapis/nodejs-spanner/commit/ae59c7f957660e08cd5965b5e67694fa1ccc0057))
* **spanner:** Add support for change streams transaction exclusion option ([#2049](https://github.com/googleapis/nodejs-spanner/issues/2049)) ([d95cab5](https://github.com/googleapis/nodejs-spanner/commit/d95cab5abe50cdb56cbc1d6d935aee29526e1096))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.3.3 ([#2038](https://github.com/googleapis/nodejs-spanner/issues/2038)) ([d86c1b0](https://github.com/googleapis/nodejs-spanner/commit/d86c1b0c21c7c95e3110221b3ca6ff9ff3b4a088))
* Drop table statement ([#2036](https://github.com/googleapis/nodejs-spanner/issues/2036)) ([f31d7b2](https://github.com/googleapis/nodejs-spanner/commit/f31d7b205d74d4a783f0d5159dd5b62efe968fe6))

## [7.7.0](https://github.com/googleapis/nodejs-spanner/compare/v7.6.0...v7.7.0) (2024-04-17)


### Features

* OptimisticLock option for getTransaction method ([#2028](https://github.com/googleapis/nodejs-spanner/issues/2028)) ([dacf869](https://github.com/googleapis/nodejs-spanner/commit/dacf8697b20752041684710982035b4c97837d28))
* **spanner:** Adding `EXPECTED_FULFILLMENT_PERIOD` to the indicate instance creation times (with `FULFILLMENT_PERIOD_NORMAL` or `FULFILLMENT_PERIOD_EXTENDED` ENUM) with the extended instance creation time triggered by On-Demand Capacity Feature ([#2024](https://github.com/googleapis/nodejs-spanner/issues/2024)) ([5292e03](https://github.com/googleapis/nodejs-spanner/commit/5292e035c5278ba6806f9e1eb84809ed893b1e37))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.3.2 ([#2026](https://github.com/googleapis/nodejs-spanner/issues/2026)) ([0ee9831](https://github.com/googleapis/nodejs-spanner/commit/0ee98319f291f552a0afc52629d12af9969d1d10))

## [7.6.0](https://github.com/googleapis/nodejs-spanner/compare/v7.5.0...v7.6.0) (2024-03-26)


### Features

* Add instance partition support to spanner instance proto ([#2001](https://github.com/googleapis/nodejs-spanner/issues/2001)) ([4381047](https://github.com/googleapis/nodejs-spanner/commit/43810478e81d3a234e7fa94af90fd49ca379dd98))
* Managed Autoscaler ([#2015](https://github.com/googleapis/nodejs-spanner/issues/2015)) ([547ca1b](https://github.com/googleapis/nodejs-spanner/commit/547ca1b0da8c5c5e28f85fbd4ea16af21e20c980))
* **spanner:** Add a sample for max commit delays ([#1993](https://github.com/googleapis/nodejs-spanner/issues/1993)) ([91c7204](https://github.com/googleapis/nodejs-spanner/commit/91c7204e2c8f62e229d7a2b2a0ff059d421dd984))
* **spanner:** Add support for float32 ([#2020](https://github.com/googleapis/nodejs-spanner/issues/2020)) ([99e2c1d](https://github.com/googleapis/nodejs-spanner/commit/99e2c1d4791a5ca86fdccb3f600aa4592efe0a45))

## [7.5.0](https://github.com/googleapis/nodejs-spanner/compare/v7.4.0...v7.5.0) (2024-03-04)


### Features

* **spanner:** Add emulator support for the admin client autogenerated API samples ([#1994](https://github.com/googleapis/nodejs-spanner/issues/1994)) ([e2fe5b7](https://github.com/googleapis/nodejs-spanner/commit/e2fe5b748c3077078fa43e4bfa427fef603656a9))


### Bug Fixes

* Revert untyped param type feature ([#2012](https://github.com/googleapis/nodejs-spanner/issues/2012)) ([49fa60d](https://github.com/googleapis/nodejs-spanner/commit/49fa60dd0735fe66db33f7b9137dba0821eb5184))

## [7.4.0](https://github.com/googleapis/nodejs-spanner/compare/v7.3.0...v7.4.0) (2024-02-23)


### Features

* **spanner:** Add PG.OID support ([#1948](https://github.com/googleapis/nodejs-spanner/issues/1948)) ([cf9df7a](https://github.com/googleapis/nodejs-spanner/commit/cf9df7a54c21ac995bbea9ad82c3544e4aff41b6))
* Untyped param types ([#1869](https://github.com/googleapis/nodejs-spanner/issues/1869)) ([6ef44c3](https://github.com/googleapis/nodejs-spanner/commit/6ef44c383a90bf6ae95de531c83e21d2d58da159))
* Update TransactionOptions to include new option exclude_txn_from_change_streams ([#1998](https://github.com/googleapis/nodejs-spanner/issues/1998)) ([937a7a1](https://github.com/googleapis/nodejs-spanner/commit/937a7a13f8c7660e21d34ebbaecad426b2bacd99))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.3.1 ([#1995](https://github.com/googleapis/nodejs-spanner/issues/1995)) ([bed4832](https://github.com/googleapis/nodejs-spanner/commit/bed4832445e72c7116fe5495c79d989664220b38))
* Only reset pending value with resume token ([#2000](https://github.com/googleapis/nodejs-spanner/issues/2000)) ([f337089](https://github.com/googleapis/nodejs-spanner/commit/f337089567d7d92c9467e311be7d72b0a7dc8047)), closes [#1959](https://github.com/googleapis/nodejs-spanner/issues/1959)

## [7.3.0](https://github.com/googleapis/nodejs-spanner/compare/v7.2.0...v7.3.0) (2024-02-08)


### Features

* **spanner:** Add maxCommitDelay support ([#1992](https://github.com/googleapis/nodejs-spanner/issues/1992)) ([9f84408](https://github.com/googleapis/nodejs-spanner/commit/9f8440843fd8926a37ec300a318dad33b83b4f97))


### Bug Fixes

* **deps:** Update dependency google-gax to v4.1.0 ([#1981](https://github.com/googleapis/nodejs-spanner/issues/1981)) ([2a36150](https://github.com/googleapis/nodejs-spanner/commit/2a36150cb61e9abeef073724189cc651d29d8776))
* **deps:** Update dependency google-gax to v4.2.0 ([#1988](https://github.com/googleapis/nodejs-spanner/issues/1988)) ([005589a](https://github.com/googleapis/nodejs-spanner/commit/005589a7727ee87948a55a6c7710f5150fc1c6a7))
* **deps:** Update dependency google-gax to v4.2.1 ([#1989](https://github.com/googleapis/nodejs-spanner/issues/1989)) ([d2ae995](https://github.com/googleapis/nodejs-spanner/commit/d2ae9952e7449ce2321e69a6be36c9d50d863095))
* **deps:** Update dependency google-gax to v4.3.0 ([#1990](https://github.com/googleapis/nodejs-spanner/issues/1990)) ([e625753](https://github.com/googleapis/nodejs-spanner/commit/e625753a37393f32d9e449aa7324763082f6c923))

## [7.2.0](https://github.com/googleapis/nodejs-spanner/compare/v7.1.0...v7.2.0) (2024-01-11)


### Features

* Support for Directed Reads ([#1966](https://github.com/googleapis/nodejs-spanner/issues/1966)) ([c0a4363](https://github.com/googleapis/nodejs-spanner/commit/c0a43638c81dd769cc55e021cc4cf1d93db8a72a))


### Bug Fixes

* **deps:** Update dependency @google-cloud/precise-date to v4 ([#1903](https://github.com/googleapis/nodejs-spanner/issues/1903)) ([7464c8b](https://github.com/googleapis/nodejs-spanner/commit/7464c8b2412a9b718cd8981363cb982aebbe3723))
* **deps:** Update dependency @types/stack-trace to v0.0.33 ([#1952](https://github.com/googleapis/nodejs-spanner/issues/1952)) ([45ab751](https://github.com/googleapis/nodejs-spanner/commit/45ab751da1f0f73bc06c8b8e0007b457fa75518f))
* **deps:** Update dependency retry-request to v7 ([#1934](https://github.com/googleapis/nodejs-spanner/issues/1934)) ([c575c80](https://github.com/googleapis/nodejs-spanner/commit/c575c80b17e5fdf2cbba24c806fa21f26c2010dc))

## [7.1.0](https://github.com/googleapis/nodejs-spanner/compare/v7.0.0...v7.1.0) (2023-11-16)


### Features

* Add PG.OID type cod annotation ([69192b5](https://github.com/googleapis/nodejs-spanner/commit/69192b50ead0bde98676cb647ba4bf8a3112bb02))
* **spanner:** Add autoscaling config to the instance proto ([#1935](https://github.com/googleapis/nodejs-spanner/issues/1935)) ([fe285c6](https://github.com/googleapis/nodejs-spanner/commit/fe285c67074ba36aaf5b49ea867c0d5851d83717))
* **spanner:** Add directed_read_option in spanner.proto ([69192b5](https://github.com/googleapis/nodejs-spanner/commit/69192b50ead0bde98676cb647ba4bf8a3112bb02))


### Bug Fixes

* **deps:** Update dependency @types/stack-trace to v0.0.31 ([#1924](https://github.com/googleapis/nodejs-spanner/issues/1924)) ([96af405](https://github.com/googleapis/nodejs-spanner/commit/96af4051c6717dfcbbc6e117e3ecd7f8e9dd758a))
* **deps:** Update dependency @types/stack-trace to v0.0.32 ([#1939](https://github.com/googleapis/nodejs-spanner/issues/1939)) ([cb66474](https://github.com/googleapis/nodejs-spanner/commit/cb66474e995a90c1288e70842f723c51f1ffd37d))
* **deps:** Update dependency google-gax to v4.0.4 ([#1926](https://github.com/googleapis/nodejs-spanner/issues/1926)) ([361fe6a](https://github.com/googleapis/nodejs-spanner/commit/361fe6a812f56c6834f1f7c7db60fc1083243768))
* **deps:** Update dependency google-gax to v4.0.5 ([#1937](https://github.com/googleapis/nodejs-spanner/issues/1937)) ([ab26075](https://github.com/googleapis/nodejs-spanner/commit/ab260759be2fcc9ff80342f710b4c807742da2c5))

## [7.0.0](https://github.com/googleapis/nodejs-spanner/compare/v6.16.0...v7.0.0) (2023-08-30)


### ⚠ BREAKING CHANGES

* upgrade to Node 14 ([#1890](https://github.com/googleapis/nodejs-spanner/issues/1890))

### Bug Fixes

* Idwaiter with multiple requests ([#1910](https://github.com/googleapis/nodejs-spanner/issues/1910)) ([83dd1f8](https://github.com/googleapis/nodejs-spanner/commit/83dd1f8201d07898bd3ddff9e339dfbcef7d7ace))


### Miscellaneous Chores

* Upgrade to Node 14 ([#1890](https://github.com/googleapis/nodejs-spanner/issues/1890)) ([0024772](https://github.com/googleapis/nodejs-spanner/commit/0024772b750de404cd44771e320fe89cd430f064))

## [6.16.0](https://github.com/googleapis/nodejs-spanner/compare/v6.15.0...v6.16.0) (2023-08-07)


### Features

* Bit reverse sequence ([#1846](https://github.com/googleapis/nodejs-spanner/issues/1846)) ([4154c02](https://github.com/googleapis/nodejs-spanner/commit/4154c02f4c5ac1aa23f4c7c61521ab6fbabadfb8))


### Bug Fixes

* Databoost tests ([#1870](https://github.com/googleapis/nodejs-spanner/issues/1870)) ([45e13c7](https://github.com/googleapis/nodejs-spanner/commit/45e13c70607abf717d533a8c5b1c58752a5439cb))

## [6.15.0](https://github.com/googleapis/nodejs-spanner/compare/v6.14.0...v6.15.0) (2023-08-04)


### Features

* Enable leader aware routing by default. This update contains performance optimisations that will reduce the latency of read/write transactions that originate from a region other than the default leader region. ([6852d99](https://github.com/googleapis/nodejs-spanner/commit/6852d99b858eb323ac3fc5e61905b8bf59486062))

## [6.14.0](https://github.com/googleapis/nodejs-spanner/compare/v6.13.0...v6.14.0) (2023-07-21)


### Features

* Foreign key delete cascade testing, samples ([#1825](https://github.com/googleapis/nodejs-spanner/issues/1825)) ([74a54b0](https://github.com/googleapis/nodejs-spanner/commit/74a54b03f0d73a62edd524fa8d0248aea7ddf344))
* Set LAR as False ([#1883](https://github.com/googleapis/nodejs-spanner/issues/1883)) ([ed510e8](https://github.com/googleapis/nodejs-spanner/commit/ed510e8545876e188e7bd782b6db80e677c3063c))

## [6.13.0](https://github.com/googleapis/nodejs-spanner/compare/v6.12.0...v6.13.0) (2023-07-21)


### Features

* Enable leader aware routing by default. This update contains performance optimisations that will reduce the latency of read/write transactions that originate from a region other than the default leader region. ([87cd5e6](https://github.com/googleapis/nodejs-spanner/commit/87cd5e6ecdf6d888dd0e7fe712b7070c58b32d42))


### Bug Fixes

* **deps:** Update dependency yargs to v17 ([#1866](https://github.com/googleapis/nodejs-spanner/issues/1866)) ([24e321f](https://github.com/googleapis/nodejs-spanner/commit/24e321f6327cfdfc191a84bb47d80a156eff5be9))

## [6.12.0](https://github.com/googleapis/nodejs-spanner/compare/v6.11.0...v6.12.0) (2023-06-19)


### Features

* Databoostenabled for Query and Read partitions ([#1784](https://github.com/googleapis/nodejs-spanner/issues/1784)) ([66ff70c](https://github.com/googleapis/nodejs-spanner/commit/66ff70cd377d5e3f60a6796bc36bab3a39337f31))

## [6.11.0](https://github.com/googleapis/nodejs-spanner/compare/v6.10.1...v6.11.0) (2023-06-06)


### Features

* **spanner:** Add DdlStatementActionInfo and add actions to UpdateDatabaseDdlMetadata ([#1860](https://github.com/googleapis/nodejs-spanner/issues/1860)) ([3e86f36](https://github.com/googleapis/nodejs-spanner/commit/3e86f369b927e3bf0a2046bd13d0b6a39a9bb076))
* Testing for fgac in pg ([#1811](https://github.com/googleapis/nodejs-spanner/issues/1811)) ([c48945f](https://github.com/googleapis/nodejs-spanner/commit/c48945f536685d6e4ee4097cfac7d5f57853553e))

## [6.10.1](https://github.com/googleapis/nodejs-spanner/compare/v6.10.0...v6.10.1) (2023-05-30)


### Bug Fixes

* Set database admin and instance as having handwritten layers (republish docs) ([3e3e624](https://github.com/googleapis/nodejs-spanner/commit/3e3e624187013d62a5ff479386fb8961f279b5ca))

## [6.10.0](https://github.com/googleapis/nodejs-spanner/compare/v6.9.0...v6.10.0) (2023-05-17)


### Features

* Add support for UpdateDatabase ([#1802](https://github.com/googleapis/nodejs-spanner/issues/1802)) ([f4fbe71](https://github.com/googleapis/nodejs-spanner/commit/f4fbe71d819fde9a237f25b03af228b27cf58689))
* Add support for UpdateDatabase in Cloud Spanner ([#1848](https://github.com/googleapis/nodejs-spanner/issues/1848)) ([dd9d505](https://github.com/googleapis/nodejs-spanner/commit/dd9d505e1480b9f45f0f4a09b0abca8282d5fceb))


### Bug Fixes

* Set grpc useragent ([#1847](https://github.com/googleapis/nodejs-spanner/issues/1847)) ([021e54e](https://github.com/googleapis/nodejs-spanner/commit/021e54ef469d7d95bae64c687b65489cbfc56cfa))

## [6.9.0](https://github.com/googleapis/nodejs-spanner/compare/v6.8.0...v6.9.0) (2023-04-26)


### Features

* Leader aware routing ([#1783](https://github.com/googleapis/nodejs-spanner/issues/1783)) ([0703f41](https://github.com/googleapis/nodejs-spanner/commit/0703f4160c4a0b4c9f9f716174daca110ab8e50f))

## [6.8.0](https://github.com/googleapis/nodejs-spanner/compare/v6.7.2...v6.8.0) (2023-04-06)


### Features

* Adding new fields for Serverless analytics ([#1816](https://github.com/googleapis/nodejs-spanner/issues/1816)) ([2a6ca6f](https://github.com/googleapis/nodejs-spanner/commit/2a6ca6f09215752f9451d625ac02837e9d70b66a))


### Bug Fixes

* Begin transaction foes not handle error ([#1833](https://github.com/googleapis/nodejs-spanner/issues/1833)) ([6ecd366](https://github.com/googleapis/nodejs-spanner/commit/6ecd366da7183d502c710cb5c879984c276b12db))
* Correcting the proto field Id for field data_boost_enabled ([#1827](https://github.com/googleapis/nodejs-spanner/issues/1827)) ([7f6d4cc](https://github.com/googleapis/nodejs-spanner/commit/7f6d4ccce9269197312f2d795ef854e1789e8fce))
* Logic for retrying specifiied internal errors ([#1822](https://github.com/googleapis/nodejs-spanner/issues/1822)) ([f915bd1](https://github.com/googleapis/nodejs-spanner/commit/f915bd16cf7e817243e46a319b3e6f270b24bf68)), closes [#1808](https://github.com/googleapis/nodejs-spanner/issues/1808)

## [6.7.2](https://github.com/googleapis/nodejs-spanner/compare/v6.7.1...v6.7.2) (2023-02-17)


### Bug Fixes

* Tests emit empty metadata before emitting unspecified error ([14ef031](https://github.com/googleapis/nodejs-spanner/commit/14ef0318db756e7debad8599b1e274b8877291e1))

## [6.7.1](https://github.com/googleapis/nodejs-spanner/compare/v6.7.0...v6.7.1) (2023-01-23)


### Bug Fixes

* Change of tag for fgac ([#1780](https://github.com/googleapis/nodejs-spanner/issues/1780)) ([d75b6dd](https://github.com/googleapis/nodejs-spanner/commit/d75b6dd79ffc2442cbd7a14f1ea952edc6678a64))
* **codec:** Use index to determine array struct member value ([#1775](https://github.com/googleapis/nodejs-spanner/issues/1775)) ([fc2b695](https://github.com/googleapis/nodejs-spanner/commit/fc2b695d9ea6b65df856b4b081a75165009413ee)), closes [#1774](https://github.com/googleapis/nodejs-spanner/issues/1774)

## [6.7.0](https://github.com/googleapis/nodejs-spanner/compare/v6.6.0...v6.7.0) (2023-01-17)


### Features

* Added SuggestConversationSummary RPC ([#1744](https://github.com/googleapis/nodejs-spanner/issues/1744)) ([14346f3](https://github.com/googleapis/nodejs-spanner/commit/14346f3cf8ed0cb0a93c255dc520dc62887c0e1a))

## [6.6.0](https://github.com/googleapis/nodejs-spanner/compare/v6.5.0...v6.6.0) (2022-12-16)


### Features

* Export data types in index.ts ([#1726](https://github.com/googleapis/nodejs-spanner/issues/1726)) ([844f57f](https://github.com/googleapis/nodejs-spanner/commit/844f57fa5e79e5e5a5ede80df5e117004427f201)), closes [#1720](https://github.com/googleapis/nodejs-spanner/issues/1720)
* Fgac support and samples ([#1751](https://github.com/googleapis/nodejs-spanner/issues/1751)) ([0a394df](https://github.com/googleapis/nodejs-spanner/commit/0a394df9bfa193d79edc4c3a3d26238f361c0d45))


### Bug Fixes

* Add sleep after admin request intensive tests ([#1758](https://github.com/googleapis/nodejs-spanner/issues/1758)) ([7643ceb](https://github.com/googleapis/nodejs-spanner/commit/7643ceb7cde9f420539877b86fdb0d38b254348d))

## [6.5.0](https://github.com/googleapis/nodejs-spanner/compare/v6.4.0...v6.5.0) (2022-11-30)


### Features

* Inline BeginTransaction with first statement ([#1692](https://github.com/googleapis/nodejs-spanner/issues/1692)) ([d1b95d2](https://github.com/googleapis/nodejs-spanner/commit/d1b95d21e2c8cb0eff88351265cad248870bb3ea))


### Bug Fixes

* Cleanup different types of session pools ([#1739](https://github.com/googleapis/nodejs-spanner/issues/1739)) ([6f55187](https://github.com/googleapis/nodejs-spanner/commit/6f551877ea0d4b67e3c734377bdadd5d570cf839))
* **deps:** Use google-gax v3.5.2 ([#1732](https://github.com/googleapis/nodejs-spanner/issues/1732)) ([8341b1f](https://github.com/googleapis/nodejs-spanner/commit/8341b1fa5dfcf0b286892efb8b57c7ad694cdbb8))

## [6.4.0](https://github.com/googleapis/nodejs-spanner/compare/v6.3.0...v6.4.0) (2022-10-27)


### Features

* Adding support and samples for Jsonb data type in spangres ([#1729](https://github.com/googleapis/nodejs-spanner/issues/1729)) ([f050354](https://github.com/googleapis/nodejs-spanner/commit/f0503547012ab0ac8a04524ecf7bc92807f35379))
* Update result_set.proto to return undeclared parameters in ExecuteSql API ([eaa445e](https://github.com/googleapis/nodejs-spanner/commit/eaa445ed314190abefc17e3672bb5e200142618b))
* Update transaction.proto to include different lock modes ([#1723](https://github.com/googleapis/nodejs-spanner/issues/1723)) ([eaa445e](https://github.com/googleapis/nodejs-spanner/commit/eaa445ed314190abefc17e3672bb5e200142618b))

## [6.3.0](https://github.com/googleapis/nodejs-spanner/compare/v6.2.0...v6.3.0) (2022-10-03)


### Features

* Support customer managed instance configurations ([#1611](https://github.com/googleapis/nodejs-spanner/issues/1611)) ([bbe8f69](https://github.com/googleapis/nodejs-spanner/commit/bbe8f697e8838e358973cd4a5f2db9e2d4df5349))


### Bug Fixes

* **deps:** Update dependency @google-cloud/precise-date to v3 ([#1676](https://github.com/googleapis/nodejs-spanner/issues/1676)) ([3f20ec4](https://github.com/googleapis/nodejs-spanner/commit/3f20ec47bbf89e1f72546a8ebf41a8b4ba93832f))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-spanner/issues/1553)) ([#1700](https://github.com/googleapis/nodejs-spanner/issues/1700)) ([f9c2640](https://github.com/googleapis/nodejs-spanner/commit/f9c2640e054659a2e8299b8f989fa7936d04b0d7))
* use google-gax v3.3.0 ([f9c2640](https://github.com/googleapis/nodejs-spanner/commit/f9c2640e054659a2e8299b8f989fa7936d04b0d7))

## [6.2.0](https://github.com/googleapis/nodejs-spanner/compare/v6.1.4...v6.2.0) (2022-09-16)


### Features

* Add custom instance config operations ([#1712](https://github.com/googleapis/nodejs-spanner/issues/1712)) ([4b7716b](https://github.com/googleapis/nodejs-spanner/commit/4b7716be5409698e21bb79edec5cdf1019047de8))


### Bug Fixes

* Allow passing gax instance to client constructor ([#1698](https://github.com/googleapis/nodejs-spanner/issues/1698)) ([588c1a2](https://github.com/googleapis/nodejs-spanner/commit/588c1a2e0c449cfcb86cac73da32dd5794ee2baa))
* **deps:** Use grpc-gcp v1.0.0 ([#1710](https://github.com/googleapis/nodejs-spanner/issues/1710)) ([12eab9d](https://github.com/googleapis/nodejs-spanner/commit/12eab9d628b72b5a7fc88f3d5e932b7a4d70dce2))
* Move runtime dependencies from dev dependencies to dependencies ([#1704](https://github.com/googleapis/nodejs-spanner/issues/1704)) ([b2c1c0f](https://github.com/googleapis/nodejs-spanner/commit/b2c1c0f93653af6cc7bd9893ca14394f2a631b68))
* Preserve default values in x-goog-request-params header ([#1711](https://github.com/googleapis/nodejs-spanner/issues/1711)) ([f1ae513](https://github.com/googleapis/nodejs-spanner/commit/f1ae51301d4ea9b0ed1ad4d4762c249fef9f8d08))

## [6.1.4](https://github.com/googleapis/nodejs-spanner/compare/v6.1.3...v6.1.4) (2022-09-06)


### Bug Fixes

* Add hashes to requirements.txt ([#1544](https://github.com/googleapis/nodejs-spanner/issues/1544)) ([#1697](https://github.com/googleapis/nodejs-spanner/issues/1697)) ([61a1468](https://github.com/googleapis/nodejs-spanner/commit/61a1468fb0282bad642e643fc98a19d63acdcd1c))
* Better support for fallback mode ([#1694](https://github.com/googleapis/nodejs-spanner/issues/1694)) ([bbc8831](https://github.com/googleapis/nodejs-spanner/commit/bbc88317149a3d86c50ccfd98092d5bfb77a104e))
* Change import long to require ([#1695](https://github.com/googleapis/nodejs-spanner/issues/1695)) ([9283f4b](https://github.com/googleapis/nodejs-spanner/commit/9283f4bdfaea0ceececacbb80df3c37bd522b657))
* **deps:** Update dependency @google-cloud/projectify to v3 ([#1678](https://github.com/googleapis/nodejs-spanner/issues/1678)) ([e3c1499](https://github.com/googleapis/nodejs-spanner/commit/e3c1499d0bdcbe3b578c5e7dc1d725630a1a0a30))
* **deps:** Update dependency protobufjs to v7 ([#1686](https://github.com/googleapis/nodejs-spanner/issues/1686)) ([2839d23](https://github.com/googleapis/nodejs-spanner/commit/2839d2317ca7368d288ee9d7feb806f0ac2069c6))
* Target new spanner db admin service config ([#1685](https://github.com/googleapis/nodejs-spanner/issues/1685)) ([2495c07](https://github.com/googleapis/nodejs-spanner/commit/2495c0723be70cf679ffa9e86f45199dbcd8c77b))
* Test case fix to avoid the latest typescript dependency issue ([#1703](https://github.com/googleapis/nodejs-spanner/issues/1703)) ([6282f64](https://github.com/googleapis/nodejs-spanner/commit/6282f64560510ae54be26d992d168091f7e943bc))

## [6.1.3](https://github.com/googleapis/nodejs-spanner/compare/v6.1.2...v6.1.3) (2022-07-07)


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v4 ([#1663](https://github.com/googleapis/nodejs-spanner/issues/1663)) ([487c58c](https://github.com/googleapis/nodejs-spanner/commit/487c58ce2a2dbf21cdc1b43ea53d68ea6edbfd81))

## [6.1.2](https://github.com/googleapis/nodejs-spanner/compare/v6.1.1...v6.1.2) (2022-07-07)


### Bug Fixes

* **deps:** update dependency @google-cloud/kms to v3 ([#1664](https://github.com/googleapis/nodejs-spanner/issues/1664)) ([42f41e9](https://github.com/googleapis/nodejs-spanner/commit/42f41e99f3cba9c3bdb981f70d6423c48adbc0d6))

## [6.1.1](https://github.com/googleapis/nodejs-spanner/compare/v6.1.0...v6.1.1) (2022-07-06)


### Bug Fixes

* call Promise.race without a long pending promise to prevent memory leak ([#1657](https://github.com/googleapis/nodejs-spanner/issues/1657)) ([768acb6](https://github.com/googleapis/nodejs-spanner/commit/768acb6279914dfe84e372afc1d83dd76ca3dd4d))
* **deps:** update dependency yargs to v17 ([#1537](https://github.com/googleapis/nodejs-spanner/issues/1537)) ([1039f68](https://github.com/googleapis/nodejs-spanner/commit/1039f68c7b459c2abeef4388fd8541576d374b66))

## [6.1.0](https://github.com/googleapis/nodejs-spanner/compare/v6.0.0...v6.1.0) (2022-07-04)


### Features

* add Session creator role ([91ef6d3](https://github.com/googleapis/nodejs-spanner/commit/91ef6d373a1ed2c7e191de4003571270bfc4e895))
* Adding two new fields for Instance create_time and update_time ([#1641](https://github.com/googleapis/nodejs-spanner/issues/1641)) ([91ef6d3](https://github.com/googleapis/nodejs-spanner/commit/91ef6d373a1ed2c7e191de4003571270bfc4e895))


### Bug Fixes

* **deps:** update dependency @google-cloud/promisify to v3 ([#1629](https://github.com/googleapis/nodejs-spanner/issues/1629)) ([1467956](https://github.com/googleapis/nodejs-spanner/commit/1467956314c77f66034fa3db166ba68d7c2aba2d))
* Improve spanner.date handling of years before 1000AD ([#1654](https://github.com/googleapis/nodejs-spanner/issues/1654)) ([fd89a29](https://github.com/googleapis/nodejs-spanner/commit/fd89a294dcab017dbbe7000bce613b0d4ed60f96))

## [6.0.0](https://github.com/googleapis/nodejs-spanner/compare/v5.18.0...v6.0.0) (2022-06-07)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1637)

### Features

* Adding IT for date and commit timestamp ([#1621](https://github.com/googleapis/nodejs-spanner/issues/1621)) ([1367aa7](https://github.com/googleapis/nodejs-spanner/commit/1367aa7dc9818be5610dfc5ae67d09652e7009e5))
* AuditConfig for IAM v1 ([#1599](https://github.com/googleapis/nodejs-spanner/issues/1599)) ([c358d66](https://github.com/googleapis/nodejs-spanner/commit/c358d668ca2a25f99ab73a4b6c1ebbe09c34d4de))


### Bug Fixes

* **deps:** update dependency grpc-gcp to ^0.4.0 ([#1603](https://github.com/googleapis/nodejs-spanner/issues/1603)) ([f00b3c6](https://github.com/googleapis/nodejs-spanner/commit/f00b3c65e58c2f36e69a05fef0b3c9bc68a4ee55))
* fixes for dynamic routing and streaming descriptors ([#1639](https://github.com/googleapis/nodejs-spanner/issues/1639)) ([977a543](https://github.com/googleapis/nodejs-spanner/commit/977a543d693ca2f2e8bb303be6df592aa4def1dd))
* pin version for nodejs gax-node ([#1617](https://github.com/googleapis/nodejs-spanner/issues/1617)) ([fb0017f](https://github.com/googleapis/nodejs-spanner/commit/fb0017ffab3cfa41cd132df4511a47fb68439bf5))


### Build System

* update library to use Node 12 ([#1637](https://github.com/googleapis/nodejs-spanner/issues/1637)) ([994acf3](https://github.com/googleapis/nodejs-spanner/commit/994acf3edd7c261085f58722fa2f86f95b3a56f3))

## [5.18.0](https://github.com/googleapis/nodejs-spanner/compare/v5.17.0...v5.18.0) (2022-04-03)


### Features

* add support for Cross region backup proto changes ([#1587](https://github.com/googleapis/nodejs-spanner/issues/1587)) ([9439ca4](https://github.com/googleapis/nodejs-spanner/commit/9439ca4cf260923a7cb90e0568864cb719ab8fc6))
* integration testing for postgres dialect ([#1593](https://github.com/googleapis/nodejs-spanner/issues/1593)) ([ebe06a6](https://github.com/googleapis/nodejs-spanner/commit/ebe06a6cefbeacc37c40f2474b9d265b78c846e2))
* Postgres Numeric and database support ([#1592](https://github.com/googleapis/nodejs-spanner/issues/1592)) ([7ca3975](https://github.com/googleapis/nodejs-spanner/commit/7ca3975c5e25e78983f77df9e921642c90874f90))
* Spanner copy backup ([#1530](https://github.com/googleapis/nodejs-spanner/issues/1530)) ([cefb1b4](https://github.com/googleapis/nodejs-spanner/commit/cefb1b4c831997e5c52122c5e6c3fd9cd9cb2c76))


### Bug Fixes

* removing table_catalog from schema information ([#1595](https://github.com/googleapis/nodejs-spanner/issues/1595)) ([8bcbd95](https://github.com/googleapis/nodejs-spanner/commit/8bcbd95e7423f03aa16ffd500fca998f75c8d0cf))

## [5.17.0](https://github.com/googleapis/nodejs-spanner/compare/v5.16.3...v5.17.0) (2022-03-09)


### Features

* Refactor create database options schema to accept array ([#1578](https://github.com/googleapis/nodejs-spanner/issues/1578)) ([b1c88ac](https://github.com/googleapis/nodejs-spanner/commit/b1c88accee3770bb94e6a7d73e767eaa426a86a3))

### [5.16.3](https://github.com/googleapis/nodejs-spanner/compare/v5.16.3...v5.16.3) (2022-01-31)


### Miscellaneous Chores

* Release-As: 5.16.3 ([#1556](https://github.com/googleapis/nodejs-spanner/issues/1556)) ([31f5fbc](https://github.com/googleapis/nodejs-spanner/commit/31f5fbc6d890fd7296497d6992a7d186ea786476))

### [5.16.3](https://github.com/googleapis/nodejs-spanner/compare/v5.16.3...v5.16.3) (2022-01-21)


### Miscellaneous Chores

* Release-As: 5.16.3 ([#1556](https://github.com/googleapis/nodejs-spanner/issues/1556)) ([31f5fbc](https://github.com/googleapis/nodejs-spanner/commit/31f5fbc6d890fd7296497d6992a7d186ea786476))

### [5.16.3](https://github.com/googleapis/nodejs-spanner/compare/v5.16.2...v5.16.3) (2022-01-19)


### Bug Fixes

* for merging when array/struct chunks contain null ([#1541](https://github.com/googleapis/nodejs-spanner/issues/1541)) ([72871fc](https://github.com/googleapis/nodejs-spanner/commit/72871fca5b67aec3af633484ff70a73be55372be))

### [5.16.2](https://github.com/googleapis/nodejs-spanner/compare/v5.16.1...v5.16.2) (2022-01-17)


### Bug Fixes

* fix for new @types/node version ([#1542](https://github.com/googleapis/nodejs-spanner/issues/1542)) ([4b56c58](https://github.com/googleapis/nodejs-spanner/commit/4b56c584fa85ab8b22867157566ce7245daa8d8d))

### [5.16.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.16.0...v5.16.1) (2021-12-29)


### Bug Fixes

* change in region ([#1523](https://www.github.com/googleapis/nodejs-spanner/issues/1523)) ([6caefc4](https://www.github.com/googleapis/nodejs-spanner/commit/6caefc4a0aafaa786a1d4b3fe3501d005d03bf6e))

## [5.16.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.15.2...v5.16.0) (2021-12-09)


### Features

* add eslintignore for sameple generated code ([#1302](https://www.github.com/googleapis/nodejs-spanner/issues/1302)) ([#1520](https://www.github.com/googleapis/nodejs-spanner/issues/1520)) ([f835b72](https://www.github.com/googleapis/nodejs-spanner/commit/f835b721210d01b11d7f5751ee06f13518e7fe0f))


### Bug Fixes

* **build:** set default branch to main ([#1469](https://www.github.com/googleapis/nodejs-spanner/issues/1469)) ([152985a](https://www.github.com/googleapis/nodejs-spanner/commit/152985a1f783534e6b3e3ce332a1333dec67269d))
* **cloud-rad:** move comments for TSDoc ([#1509](https://www.github.com/googleapis/nodejs-spanner/issues/1509)) ([1c49922](https://www.github.com/googleapis/nodejs-spanner/commit/1c49922c75bd56dbd0456318bee8a336eb088156))

### [5.15.2](https://www.github.com/googleapis/nodejs-spanner/compare/v5.15.1...v5.15.2) (2021-09-10)


### Bug Fixes

* never try to create a negative number of sessions ([#1467](https://www.github.com/googleapis/nodejs-spanner/issues/1467)) ([13f5153](https://www.github.com/googleapis/nodejs-spanner/commit/13f51537ab13e0cd5a1fb9142f76796b1911809c))

### [5.15.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.15.0...v5.15.1) (2021-09-08)


### Bug Fixes

* **deps:** google-gax v2.17.1 ([#1429](https://www.github.com/googleapis/nodejs-spanner/issues/1429)) ([3a1517c](https://www.github.com/googleapis/nodejs-spanner/commit/3a1517cff95bd00598935b30859c7991b4d4c4ca))

## [5.15.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.14.0...v5.15.0) (2021-08-26)


### Features

* add support for JSON data type ([#1368](https://www.github.com/googleapis/nodejs-spanner/issues/1368)) ([b8d6fe5](https://www.github.com/googleapis/nodejs-spanner/commit/b8d6fe5b1e767576ba42d57d2e4e4597bca27883))

## [5.14.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.13.1...v5.14.0) (2021-08-24)


### Features

* turns on self-signed JWT feature flag ([#1455](https://www.github.com/googleapis/nodejs-spanner/issues/1455)) ([2867a80](https://www.github.com/googleapis/nodejs-spanner/commit/2867a80319c07b4d40e88026409722f26db47631))

### [5.13.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.13.0...v5.13.1) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#1452](https://www.github.com/googleapis/nodejs-spanner/issues/1452)) ([7379eb2](https://www.github.com/googleapis/nodejs-spanner/commit/7379eb260a8fe4a37b71ccf9ad9e2e17d9669c5f))

## [5.13.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.12.0...v5.13.0) (2021-08-04)


### Features

* add GetInstanceConfig function ([#1438](https://www.github.com/googleapis/nodejs-spanner/issues/1438)) ([24b3524](https://www.github.com/googleapis/nodejs-spanner/commit/24b35242d3ce52e16a5fa04ff949ca44a6608396))


### Bug Fixes

* adding option to skip back up tests ([#1445](https://www.github.com/googleapis/nodejs-spanner/issues/1445)) ([e189e5a](https://www.github.com/googleapis/nodejs-spanner/commit/e189e5a03c6e40d3adc64233e72d9d9748e0bc0a))

## [5.12.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.11.1...v5.12.0) (2021-07-08)


### Features

* add tagging support ([#1419](https://www.github.com/googleapis/nodejs-spanner/issues/1419)) ([4770dab](https://www.github.com/googleapis/nodejs-spanner/commit/4770dab607e50e81d79c8c4c8fafbb278cb08954))

### [5.11.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.11.0...v5.11.1) (2021-07-07)


### Bug Fixes

* add close method to Spanner client ([#1416](https://www.github.com/googleapis/nodejs-spanner/issues/1416)) ([69cd0b4](https://www.github.com/googleapis/nodejs-spanner/commit/69cd0b474ab6c836724813fd8bea88ec2e1ac9f5)), closes [#1306](https://www.github.com/googleapis/nodejs-spanner/issues/1306)

## [5.11.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.10.0...v5.11.0) (2021-07-01)


### Features

* **spanner:** add leader_options to InstanceConfig and default_leader to Database ([#1414](https://www.github.com/googleapis/nodejs-spanner/issues/1414)) ([e67adc2](https://www.github.com/googleapis/nodejs-spanner/commit/e67adc281d603d741af49d957eff05fd4184d38e))

## [5.10.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.9.3...v5.10.0) (2021-06-30)


### Features

* create instances with processing units ([#1279](https://www.github.com/googleapis/nodejs-spanner/issues/1279)) ([05c2135](https://www.github.com/googleapis/nodejs-spanner/commit/05c213522a32627186ad9b474b416c1b9996df1f))


### Bug Fixes

* replace projectId placeholder in formatted names ([#1407](https://www.github.com/googleapis/nodejs-spanner/issues/1407)) ([4364d2b](https://www.github.com/googleapis/nodejs-spanner/commit/4364d2b25638384a6a1bea2e283b1219b4e5cdf3)), closes [#1375](https://www.github.com/googleapis/nodejs-spanner/issues/1375)

### [5.9.3](https://www.github.com/googleapis/nodejs-spanner/compare/v5.9.2...v5.9.3) (2021-06-29)


### Bug Fixes

* **deps:** require google-gax v2.17.0 ([#1409](https://www.github.com/googleapis/nodejs-spanner/issues/1409)) ([080d82f](https://www.github.com/googleapis/nodejs-spanner/commit/080d82f455324d2010187904532032e7905e14ac))

### [5.9.2](https://www.github.com/googleapis/nodejs-spanner/compare/v5.9.1...v5.9.2) (2021-06-25)


### Bug Fixes

* reset buffered chunked value before retry ([#1397](https://www.github.com/googleapis/nodejs-spanner/issues/1397)) ([da2ca7b](https://www.github.com/googleapis/nodejs-spanner/commit/da2ca7b15539119fada7869c206ad24460d8edfa)), closes [#1392](https://www.github.com/googleapis/nodejs-spanner/issues/1392)

### [5.9.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.9.0...v5.9.1) (2021-06-24)


### Bug Fixes

* make request optional in all cases ([#1400](https://www.github.com/googleapis/nodejs-spanner/issues/1400)) ([0b78770](https://www.github.com/googleapis/nodejs-spanner/commit/0b78770bfef6f463abb0f336999f7dfd61b5b2fe))

## [5.9.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.8.1...v5.9.0) (2021-06-14)


### Features

* **spanner:** add processing_units to Instance resource ([#1398](https://www.github.com/googleapis/nodejs-spanner/issues/1398)) ([878cd3f](https://www.github.com/googleapis/nodejs-spanner/commit/878cd3f1596526b6e4e2457babd3dc2c2add11ad))

### [5.8.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.8.0...v5.8.1) (2021-06-10)


### Bug Fixes

* unknown errors should not be retried ([#1388](https://www.github.com/googleapis/nodejs-spanner/issues/1388)) ([1d6f4e2](https://www.github.com/googleapis/nodejs-spanner/commit/1d6f4e2923bc1ac20c0a73c342332ec2ae259812)), closes [#1387](https://www.github.com/googleapis/nodejs-spanner/issues/1387)

## [5.8.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.7.0...v5.8.0) (2021-06-07)


### Features

* support setting `optimizerStatisticsPackage` ([#1225](https://www.github.com/googleapis/nodejs-spanner/issues/1225)) ([dadc6dc](https://www.github.com/googleapis/nodejs-spanner/commit/dadc6dcf5c01e1bb380555fa9ea2ba9182af049c))


### Bug Fixes

* ensure table funcs accept gaxOptions directly ([#1371](https://www.github.com/googleapis/nodejs-spanner/issues/1371)) ([2c57c16](https://www.github.com/googleapis/nodejs-spanner/commit/2c57c1631a93d545bab52e309a5acd7641a747f3))
* lint issue ([#1372](https://www.github.com/googleapis/nodejs-spanner/issues/1372)) ([3be0b4b](https://www.github.com/googleapis/nodejs-spanner/commit/3be0b4b51c8a76c7682101851d94e0611a87bc24))

## [5.7.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.6.1...v5.7.0) (2021-04-21)


### Features

* regenerate protos with new types ([#1335](https://www.github.com/googleapis/nodejs-spanner/issues/1335)) ([cc6980e](https://www.github.com/googleapis/nodejs-spanner/commit/cc6980e364ea641f55b4ff1a765b22333352419a))
* support RPC priority ([#1282](https://www.github.com/googleapis/nodejs-spanner/issues/1282)) ([8c82694](https://www.github.com/googleapis/nodejs-spanner/commit/8c8269437291a96aaed97db6684f7c8907f1fe43))


### Bug Fixes

* prevent unhandled promise rejection while projectId or credential not found ([#1340](https://www.github.com/googleapis/nodejs-spanner/issues/1340)) ([47ce076](https://www.github.com/googleapis/nodejs-spanner/commit/47ce0765cce4bdf8513917c86ec1db9c53f97618))
* prevent unhandled promise rejections while creating session ([#1332](https://www.github.com/googleapis/nodejs-spanner/issues/1332)) ([b62bf5e](https://www.github.com/googleapis/nodejs-spanner/commit/b62bf5e1a96c495f73512a97419ecf98915b457e))

### [5.6.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.6.0...v5.6.1) (2021-03-30)


### Bug Fixes

* remove acquire timeout listener on return of session ([#1327](https://www.github.com/googleapis/nodejs-spanner/issues/1327)) ([72c7cce](https://www.github.com/googleapis/nodejs-spanner/commit/72c7cce0cc00631a0ce46cdb2bf66a0ee48d615b)), closes [#1324](https://www.github.com/googleapis/nodejs-spanner/issues/1324)

## [5.6.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.5.0...v5.6.0) (2021-03-20)


### Features

* customer-managed encryption keys ([#1274](https://www.github.com/googleapis/nodejs-spanner/issues/1274)) ([51cabc7](https://www.github.com/googleapis/nodejs-spanner/commit/51cabc7a6d8c96a86acbbeea3a357c261248ddb4))


### Bug Fixes

* remove common protos ([#1320](https://www.github.com/googleapis/nodejs-spanner/issues/1320)) ([a73f9fc](https://www.github.com/googleapis/nodejs-spanner/commit/a73f9fc534019186e262a3e5ac6a78f156e7a56d))
* run [spanner_batch_client] independently ([#1318](https://www.github.com/googleapis/nodejs-spanner/issues/1318)) ([3844ff8](https://www.github.com/googleapis/nodejs-spanner/commit/3844ff89cb53aeeefe7309ce82f31200a0de3ae2))

## [5.5.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.4.0...v5.5.0) (2021-02-19)


### Features

* add option for returning Spanner commit stats ([#1297](https://www.github.com/googleapis/nodejs-spanner/issues/1297)) ([bc286e2](https://www.github.com/googleapis/nodejs-spanner/commit/bc286e24b1d6f83cd09bdaad2023e8347ab1d12e))
* adds PITR fields to backup and database ([#1299](https://www.github.com/googleapis/nodejs-spanner/issues/1299)) ([d7556c8](https://www.github.com/googleapis/nodejs-spanner/commit/d7556c89b92e2a9ab65f1f928faf8c452bf24a7c))
* adds style enumeration ([#1292](https://www.github.com/googleapis/nodejs-spanner/issues/1292)) ([dcf7013](https://www.github.com/googleapis/nodejs-spanner/commit/dcf7013907f8e232d0b99303a6d30be598944db9))
* CommitStats in CommitResponse ([#1254](https://www.github.com/googleapis/nodejs-spanner/issues/1254)) ([e3730d2](https://www.github.com/googleapis/nodejs-spanner/commit/e3730d219fb395d1ce8416b1e7cdecb0c8ad995e))
* Point In Time Recovery (PITR) ([#1250](https://www.github.com/googleapis/nodejs-spanner/issues/1250)) ([c53f677](https://www.github.com/googleapis/nodejs-spanner/commit/c53f677fe33ca5ed6fc65e8ee350f365d03a7642))
* return ResultSetMetadata for query ([#1308](https://www.github.com/googleapis/nodejs-spanner/issues/1308)) ([6625ef2](https://www.github.com/googleapis/nodejs-spanner/commit/6625ef2168ade370596ffefe92fc75640cf9f6f1))


### Bug Fixes

* **deps:** update dependency google-auth-library to v7 ([#1305](https://www.github.com/googleapis/nodejs-spanner/issues/1305)) ([329c901](https://www.github.com/googleapis/nodejs-spanner/commit/329c901927885c6fd34f99c71abead15ff10f7d8))
* **sample-test:** ensure instance is created before proceeding with tests ([#1291](https://www.github.com/googleapis/nodejs-spanner/issues/1291)) ([577357a](https://www.github.com/googleapis/nodejs-spanner/commit/577357ab8f8cdac70f5483312c7618c6e403fd26))
* wrong gaxOptions argument in sample ([#1294](https://www.github.com/googleapis/nodejs-spanner/issues/1294)) ([8fec23a](https://www.github.com/googleapis/nodejs-spanner/commit/8fec23a28accbaa28cfb980bac406c50b1935e32))

## [5.4.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.3.0...v5.4.0) (2020-12-02)


### Features

* support callbacks with database getRestoreInfo(), getState(), getOperations() ([#1230](https://www.github.com/googleapis/nodejs-spanner/issues/1230)) ([b56758b](https://www.github.com/googleapis/nodejs-spanner/commit/b56758b0e832c6471d14bd88b4580d21d5696fdd))


### Bug Fixes

* **browser:** check for fetch on window ([32ac608](https://www.github.com/googleapis/nodejs-spanner/commit/32ac6082383d5265f5022d97f23173e8786f4a82))
* do not modify options object, use defaultScopes ([#1264](https://www.github.com/googleapis/nodejs-spanner/issues/1264)) ([6628c6a](https://www.github.com/googleapis/nodejs-spanner/commit/6628c6a81d427b8bb8bb1a42ae63f991b1cf73c9))
* **deps:** update dependency big.js to v6 ([#1244](https://www.github.com/googleapis/nodejs-spanner/issues/1244)) ([259a51e](https://www.github.com/googleapis/nodejs-spanner/commit/259a51ee0726aa8f0b7717acd5253ecb77b16038))
* do not create sessions after getDatabases call ([#1228](https://www.github.com/googleapis/nodejs-spanner/issues/1228)) ([53d5f37](https://www.github.com/googleapis/nodejs-spanner/commit/53d5f371d54c64dd095ac9ec721d05adf2c7d064))
* **deps:** update dependency @google-cloud/precise-date to v2 ([#1240](https://www.github.com/googleapis/nodejs-spanner/issues/1240)) ([38dfec2](https://www.github.com/googleapis/nodejs-spanner/commit/38dfec22dd00f4d69750fc20e66c2395a9c6d3b3))
* **deps:** update dependency yargs to v16 ([#1233](https://www.github.com/googleapis/nodejs-spanner/issues/1233)) ([75fd09a](https://www.github.com/googleapis/nodejs-spanner/commit/75fd09acb5a9a728a8b6403f44351e4b9b44b723))

## [5.3.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.2.1...v5.3.0) (2020-09-04)


### Features

* accept gaxOptions in Database and Session #delete() ([#1206](https://www.github.com/googleapis/nodejs-spanner/issues/1206)) ([2444e8e](https://www.github.com/googleapis/nodejs-spanner/commit/2444e8e45f409e783fcbf059d487d50eb4e12d88))
* add resource header prefix ([#1196](https://www.github.com/googleapis/nodejs-spanner/issues/1196)) ([99744b6](https://www.github.com/googleapis/nodejs-spanner/commit/99744b6e3c7e61e185949913279edae35a234dce))
* return full nextQuery object in paginated calls ([#1199](https://www.github.com/googleapis/nodejs-spanner/issues/1199)) ([445015f](https://www.github.com/googleapis/nodejs-spanner/commit/445015f82243611fc8de3213957fda352fff4783))
* set metadata during getBackups and getMetadata calls ([#1198](https://www.github.com/googleapis/nodejs-spanner/issues/1198)) ([aa500a5](https://www.github.com/googleapis/nodejs-spanner/commit/aa500a517a4f825f4440936158f72a0bcc63cd35))
* spanner NUMERIC support ([#1163](https://www.github.com/googleapis/nodejs-spanner/issues/1163)) ([4724ba3](https://www.github.com/googleapis/nodejs-spanner/commit/4724ba3937de9481356084fc5e8254d8691583e5))
* Spanner numeric type, add Node 8 tests ([#1189](https://www.github.com/googleapis/nodejs-spanner/issues/1189)) ([c2bc40e](https://www.github.com/googleapis/nodejs-spanner/commit/c2bc40e9b71b658d68c7377d5598cc1a0ef0f75d))


### Bug Fixes

* `Database not found` could be returned after create() ([#1220](https://www.github.com/googleapis/nodejs-spanner/issues/1220)) ([1fddbb9](https://www.github.com/googleapis/nodejs-spanner/commit/1fddbb9847068a607e72993c2c4c09b796b70089)), closes [#1219](https://www.github.com/googleapis/nodejs-spanner/issues/1219) [#1219](https://www.github.com/googleapis/nodejs-spanner/issues/1219)
* batch transaction should use a session from the pool ([#1207](https://www.github.com/googleapis/nodejs-spanner/issues/1207)) ([0708baa](https://www.github.com/googleapis/nodejs-spanner/commit/0708baab276def6cad0f0f3c4b7589084380c2d8)), closes [#1200](https://www.github.com/googleapis/nodejs-spanner/issues/1200)
* handle potential errors when creating stream ([#1208](https://www.github.com/googleapis/nodejs-spanner/issues/1208)) ([fcf35f5](https://www.github.com/googleapis/nodejs-spanner/commit/fcf35f5749b47b47425285eca5da47b987b0e7cf)), closes [#1078](https://www.github.com/googleapis/nodejs-spanner/issues/1078)
* retry PDML on Aborted and Internal errors ([#1205](https://www.github.com/googleapis/nodejs-spanner/issues/1205)) ([2b97bac](https://www.github.com/googleapis/nodejs-spanner/commit/2b97bacf4188f2344f23971ec667d3e20f04d420)), closes [#1197](https://www.github.com/googleapis/nodejs-spanner/issues/1197)
* update minimum gax version to 2.7.0 ([#1213](https://www.github.com/googleapis/nodejs-spanner/issues/1213)) ([224de8f](https://www.github.com/googleapis/nodejs-spanner/commit/224de8f0e69e2e951be6596d83079012736cdc20)), closes [#1209](https://www.github.com/googleapis/nodejs-spanner/issues/1209)
* **spanner:** update UpdateBackup to be retryable ([#1194](https://www.github.com/googleapis/nodejs-spanner/issues/1194)) ([e53a247](https://www.github.com/googleapis/nodejs-spanner/commit/e53a2471beff22a61c8e17098ba1a9b6cff3caf0))
* typeo in nodejs .gitattribute ([#1178](https://www.github.com/googleapis/nodejs-spanner/issues/1178)) ([439d5af](https://www.github.com/googleapis/nodejs-spanner/commit/439d5af2124cc02f24e097d8101f9d6843de9b20))

### [5.2.1](https://www.github.com/googleapis/nodejs-spanner/compare/v5.2.0...v5.2.1) (2020-07-07)


### Bug Fixes

* remove error listener to prevent memory leak ([#1168](https://www.github.com/googleapis/nodejs-spanner/issues/1168)) ([523bd67](https://www.github.com/googleapis/nodejs-spanner/commit/523bd67ed6d5ecbfe9abce0f1b6ed4cce2c07b30))


### Performance Improvements

* increase default min sessions to 25 ([#1167](https://www.github.com/googleapis/nodejs-spanner/issues/1167)) ([e4aba27](https://www.github.com/googleapis/nodejs-spanner/commit/e4aba27d307e5932b223121af5bea37a7418bb20))

## [5.2.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.1.0...v5.2.0) (2020-06-30)


### Features

* add code sample for creating an instance ([#1073](https://www.github.com/googleapis/nodejs-spanner/issues/1073)) ([ab6dc62](https://www.github.com/googleapis/nodejs-spanner/commit/ab6dc62061e6893ec170b07fc3ffebbd2a4179f8))
* **secrets:** begin migration to secret manager from keystore ([#1092](https://www.github.com/googleapis/nodejs-spanner/issues/1092)) ([2031652](https://www.github.com/googleapis/nodejs-spanner/commit/2031652e062004d06a18605dc45fdd00bd52989f))


### Bug Fixes

* handle fallback option properly ([#1146](https://www.github.com/googleapis/nodejs-spanner/issues/1146)) ([70d3f2c](https://www.github.com/googleapis/nodejs-spanner/commit/70d3f2c1cd89f71d777b6bc06b48931b8e075417))
* **samples-test:** race condition in deleteData sample ([#1156](https://www.github.com/googleapis/nodejs-spanner/issues/1156)) ([39d8f0c](https://www.github.com/googleapis/nodejs-spanner/commit/39d8f0cf28f0d7df76d3d0f0d967d1ce574df3ce))
* race condition in "should transfer value from one record to another using DML statements within a transaction test" ([#1159](https://www.github.com/googleapis/nodejs-spanner/issues/1159)) ([0c46714](https://www.github.com/googleapis/nodejs-spanner/commit/0c4671460b265965482afb1894deacdc60900ee7))
* set displayName in CreateInstance sample ([#1145](https://www.github.com/googleapis/nodejs-spanner/issues/1145)) ([f9e47d9](https://www.github.com/googleapis/nodejs-spanner/commit/f9e47d9e1b9067b7488ad73b67b656efc4bb93d7))
* set instanceId to the given id ([#1094](https://www.github.com/googleapis/nodejs-spanner/issues/1094)) ([8973cbc](https://www.github.com/googleapis/nodejs-spanner/commit/8973cbcc9158b37650af2edb6015c575da1cc3ec)), closes [#1093](https://www.github.com/googleapis/nodejs-spanner/issues/1093)
* unskip PDML tests when run against emulator ([#1150](https://www.github.com/googleapis/nodejs-spanner/issues/1150)) ([8465482](https://www.github.com/googleapis/nodejs-spanner/commit/8465482fad3b40b524f0d3e255983ddd75440e3e))
* update DELETE samples to match docs ([#1072](https://www.github.com/googleapis/nodejs-spanner/issues/1072)) ([3336e04](https://www.github.com/googleapis/nodejs-spanner/commit/3336e04f6ff75539712d62ce2afabc70d8738150))
* update node issue template ([#1157](https://www.github.com/googleapis/nodejs-spanner/issues/1157)) ([27d0699](https://www.github.com/googleapis/nodejs-spanner/commit/27d0699851c24b49a77ad7e2751804a7911d698c))


### Performance Improvements

* use write fraction when resizing pool ([#1031](https://www.github.com/googleapis/nodejs-spanner/issues/1031)) ([58f773b](https://www.github.com/googleapis/nodejs-spanner/commit/58f773b17459a96abcd3b5345aaaf497a2386840))

## [5.1.0](https://www.github.com/googleapis/nodejs-spanner/compare/v5.0.0...v5.1.0) (2020-06-04)


### Features

* expose displayName in createInstance ([#798](https://www.github.com/googleapis/nodejs-spanner/issues/798)) ([39efda1](https://www.github.com/googleapis/nodejs-spanner/commit/39efda194d2d11a578f209e6c149b0ae2974ee27))
* increase sessions in the pool in batches ([#963](https://www.github.com/googleapis/nodejs-spanner/issues/963)) ([91c53cb](https://www.github.com/googleapis/nodejs-spanner/commit/91c53cb6f6504f48ee3c974dbb8fb2821c226325))
* support callbacks for exists(), getState(), getExpireTime() methods ([#1070](https://www.github.com/googleapis/nodejs-spanner/issues/1070)) ([7736080](https://www.github.com/googleapis/nodejs-spanner/commit/7736080f0e2a46c7ef8c44c278bff2bec2f28953))


### Bug Fixes

* always clean up stale instances if any ([#1030](https://www.github.com/googleapis/nodejs-spanner/issues/1030)) ([87c7edc](https://www.github.com/googleapis/nodejs-spanner/commit/87c7edcb2c3ba729b1e278bb191b695b0cd376cb))
* pause request stream on backpressure ([#936](https://www.github.com/googleapis/nodejs-spanner/issues/936)) ([558692f](https://www.github.com/googleapis/nodejs-spanner/commit/558692f55cc551db2bd72464b130051a9b28378f)), closes [#934](https://www.github.com/googleapis/nodejs-spanner/issues/934)

## [5.0.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.8.0...v5.0.0) (2020-05-14)


### ⚠ BREAKING CHANGES

* **types:** properly format listing methods with gaxOptions (#925)
* **types:** types for createInstance (#805)
* add typings for top level object (#781)
* **deps:** update dependency @google-cloud/common to v3 (#875)
* drop Node.js 8 support.

### Features

* add typings for top level object ([#781](https://www.github.com/googleapis/nodejs-spanner/issues/781)) ([c2b6f68](https://www.github.com/googleapis/nodejs-spanner/commit/c2b6f685c2f36866ddaa434c923be417de0f89ec))
* check status of long running operation by its name ([#937](https://www.github.com/googleapis/nodejs-spanner/issues/937)) ([5035e11](https://www.github.com/googleapis/nodejs-spanner/commit/5035e11f55a28def0d524a8e6ea7671367cd345e))
* run and runStream can return query stats ([#857](https://www.github.com/googleapis/nodejs-spanner/issues/857)) ([1656e4f](https://www.github.com/googleapis/nodejs-spanner/commit/1656e4f14f0dd24f530f36ecf1ccf34b51e726fb))
* spanner backup and restore support ([#855](https://www.github.com/googleapis/nodejs-spanner/issues/855)) ([967903c](https://www.github.com/googleapis/nodejs-spanner/commit/967903c4152e283f5a09dbd1b8ab3c9bc66728d3))


### Bug Fixes

* **deps:** update dependency @google-cloud/common to v3 ([#875](https://www.github.com/googleapis/nodejs-spanner/issues/875)) ([f3da343](https://www.github.com/googleapis/nodejs-spanner/commit/f3da3430645ae277ae40410b6494ea8477937610))
* **deps:** update dependency @google-cloud/paginator to v3 ([#871](https://www.github.com/googleapis/nodejs-spanner/issues/871)) ([d3b2f2c](https://www.github.com/googleapis/nodejs-spanner/commit/d3b2f2c48a21e41700877677bb2041b368773e36))
* **deps:** update dependency @google-cloud/precise-date to v2 ([#873](https://www.github.com/googleapis/nodejs-spanner/issues/873)) ([8e8b29c](https://www.github.com/googleapis/nodejs-spanner/commit/8e8b29c389d68d0f872726655c9022d899a3ea3c))
* **deps:** update dependency @google-cloud/projectify to v2 ([#870](https://www.github.com/googleapis/nodejs-spanner/issues/870)) ([e77460b](https://www.github.com/googleapis/nodejs-spanner/commit/e77460b6cc005049833f206f3fa74fc722ee3536))
* **deps:** update dependency @google-cloud/promisify to v2 ([#868](https://www.github.com/googleapis/nodejs-spanner/issues/868)) ([afe4b15](https://www.github.com/googleapis/nodejs-spanner/commit/afe4b1518aadee91fb339512470e550295f89c4d))
* **types:** fix type of ReadRequest ([#876](https://www.github.com/googleapis/nodejs-spanner/issues/876)) ([990fec2](https://www.github.com/googleapis/nodejs-spanner/commit/990fec20c482e11f48b8b7fbaacae8f395e93db9))
* **types:** properly format listing methods with gaxOptions ([#925](https://www.github.com/googleapis/nodejs-spanner/issues/925)) ([23958ae](https://www.github.com/googleapis/nodejs-spanner/commit/23958ae48f49306cf38755831db091fef16998fb))
* delete old instances then create new instance ([#955](https://www.github.com/googleapis/nodejs-spanner/issues/955)) ([96813f8](https://www.github.com/googleapis/nodejs-spanner/commit/96813f81913322f6c9a84aa9c7757029ce5f48eb))
* remove eslint, update gax, fix generated protos, run the generator ([#897](https://www.github.com/googleapis/nodejs-spanner/issues/897)) ([7cfba21](https://www.github.com/googleapis/nodejs-spanner/commit/7cfba215b436e997919a9816bd076c62cce90bbf))
* remove src/common-grpc/operation.ts ([#879](https://www.github.com/googleapis/nodejs-spanner/issues/879)) ([a30d2b4](https://www.github.com/googleapis/nodejs-spanner/commit/a30d2b47b2ccbbdf0d473281a4f76584c4850659)), closes [#878](https://www.github.com/googleapis/nodejs-spanner/issues/878)
* remove typescript conversion leftovers ([#901](https://www.github.com/googleapis/nodejs-spanner/issues/901)) ([ccf1b61](https://www.github.com/googleapis/nodejs-spanner/commit/ccf1b61bcf060a72c35712c5d0e529fad9684724))
* skip some tests when run against the emulator ([#933](https://www.github.com/googleapis/nodejs-spanner/issues/933)) ([2d91757](https://www.github.com/googleapis/nodejs-spanner/commit/2d917575dade110cbb3418d5d48c6fd0e77fae63))
* update spanner package in sample ([#930](https://www.github.com/googleapis/nodejs-spanner/issues/930)) ([5624b7b](https://www.github.com/googleapis/nodejs-spanner/commit/5624b7bafb585adcbd0a7c9d53f728ff77afb1fa))
* use DELETE FROM for consistency ([#923](https://www.github.com/googleapis/nodejs-spanner/issues/923)) ([0854c70](https://www.github.com/googleapis/nodejs-spanner/commit/0854c70d810ea05e5077d4c1a801040347415cfd))
* **types:** types for createInstance ([#805](https://www.github.com/googleapis/nodejs-spanner/issues/805)) ([67b0f54](https://www.github.com/googleapis/nodejs-spanner/commit/67b0f54c65b51ff9cec313f67c4ea54dab7c8123))


### Build System

* drop node8 and convert to TypeScript ([#888](https://www.github.com/googleapis/nodejs-spanner/issues/888)) ([4116f81](https://www.github.com/googleapis/nodejs-spanner/commit/4116f81ec9715fde14b48e0daa6930bb8c502dbe))

## [4.8.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.7.0...v4.8.0) (2020-03-12)


### Features

* add backups API ([#851](https://www.github.com/googleapis/nodejs-spanner/issues/851)) ([faf224d](https://www.github.com/googleapis/nodejs-spanner/commit/faf224dc4010337829eb0b6ecd7df274f1de5fff))
* add support for QueryOptions ([#846](https://www.github.com/googleapis/nodejs-spanner/issues/846)) ([c1098c5](https://www.github.com/googleapis/nodejs-spanner/commit/c1098c5f4509918cacd3942b8f09354c88a85bb9))

## [4.7.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.6.2...v4.7.0) (2020-02-27)


### Features

* export protos in src/index.ts ([0fa0f93](https://www.github.com/googleapis/nodejs-spanner/commit/0fa0f933ac9655278a4684bfa9e07cc912442fbf))

### [4.6.2](https://www.github.com/googleapis/nodejs-spanner/compare/v4.6.1...v4.6.2) (2020-02-14)


### Bug Fixes

* Correctly parse metadata from BatchDML response + fix flaky system test ([#825](https://www.github.com/googleapis/nodejs-spanner/issues/825)) ([8b95da7](https://www.github.com/googleapis/nodejs-spanner/commit/8b95da7c68694d7a4ce5644e82d8485d01efb434))
* retry 'Session not found' errors on getSnapshot ([#819](https://www.github.com/googleapis/nodejs-spanner/issues/819)) ([59bafbf](https://www.github.com/googleapis/nodejs-spanner/commit/59bafbfbcfe1fc3c45291a6fab6a343299123905))
* retry 'Session not found' for r/w tx ([#824](https://www.github.com/googleapis/nodejs-spanner/issues/824)) ([1b393c4](https://www.github.com/googleapis/nodejs-spanner/commit/1b393c4c940d196232f8fc6ac99dbb5d1fd61e4d))

### [4.6.1](https://www.github.com/googleapis/nodejs-spanner/compare/v4.6.0...v4.6.1) (2020-01-29)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([#816](https://www.github.com/googleapis/nodejs-spanner/issues/816)) ([e63914d](https://www.github.com/googleapis/nodejs-spanner/commit/e63914d19813400daa2b08abfba43e1d87abfe7b))
* fixed wrong return type of Database.run(..) ([#810](https://www.github.com/googleapis/nodejs-spanner/issues/810)) ([10c31d8](https://www.github.com/googleapis/nodejs-spanner/commit/10c31d80fdde2b91f2498ffcbc90a20a83c1a454)), closes [#809](https://www.github.com/googleapis/nodejs-spanner/issues/809)
* retry Session not found for Database.run(..) ([#812](https://www.github.com/googleapis/nodejs-spanner/issues/812)) ([6a48fd6](https://www.github.com/googleapis/nodejs-spanner/commit/6a48fd61bc6f424865e5a265bc1d7bac81454a7d))
* use PreciseDate instead of Date for min read timestamp ([#807](https://www.github.com/googleapis/nodejs-spanner/issues/807)) ([da8c2f8](https://www.github.com/googleapis/nodejs-spanner/commit/da8c2f85b55346d99a9eacc4249e6d6cd1a14556))

## [4.6.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.5.2...v4.6.0) (2020-01-16)


### Features

* add fieldNames option in instance#getMetadata() ([#760](https://www.github.com/googleapis/nodejs-spanner/issues/760)) ([fa3154e](https://www.github.com/googleapis/nodejs-spanner/commit/fa3154ebe6754ecce1dd7b32442bda0eb27842f6))

### [4.5.2](https://www.github.com/googleapis/nodejs-spanner/compare/v4.5.1...v4.5.2) (2020-01-15)


### Bug Fixes

* max backoff should be 32 seconds ([#792](https://www.github.com/googleapis/nodejs-spanner/issues/792)) ([c697240](https://www.github.com/googleapis/nodejs-spanner/commit/c697240c0f1c5d55bee63732b7346e7c95f25dcc))
* retry executeStreamingSql when error code is retryable ([#795](https://www.github.com/googleapis/nodejs-spanner/issues/795)) ([1491858](https://www.github.com/googleapis/nodejs-spanner/commit/149185809fe32e05504d398849f7eadfe864fb6b)), closes [#620](https://www.github.com/googleapis/nodejs-spanner/issues/620)

### [4.5.1](https://www.github.com/googleapis/nodejs-spanner/compare/v4.5.0...v4.5.1) (2020-01-08)


### Bug Fixes

* session pool should only create session if pending<=waiters ([#791](https://www.github.com/googleapis/nodejs-spanner/issues/791)) ([75345b1](https://www.github.com/googleapis/nodejs-spanner/commit/75345b18d37937b60a89c6b039c6b3a39b0ea6b7)), closes [#790](https://www.github.com/googleapis/nodejs-spanner/issues/790)

## [4.5.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.4.1...v4.5.0) (2020-01-06)


### Features

* include potential leaked session stacktraces in error ([#759](https://www.github.com/googleapis/nodejs-spanner/issues/759)) ([1c0cf27](https://www.github.com/googleapis/nodejs-spanner/commit/1c0cf27b6c502fe7cc03f9b4c9191d746761b8b6))


### Bug Fixes

* clear stack of session while preparing new r/w tx ([#768](https://www.github.com/googleapis/nodejs-spanner/issues/768)) ([c852709](https://www.github.com/googleapis/nodejs-spanner/commit/c852709cf509d174ff140ad946fbbc20e5594aba))
* delete env var after test if it was not set ([#774](https://www.github.com/googleapis/nodejs-spanner/issues/774)) ([7a1f40d](https://www.github.com/googleapis/nodejs-spanner/commit/7a1f40d5041e217363722d5a8b45c181f7a1510a))
* end readWrite transaction in sample ([#766](https://www.github.com/googleapis/nodejs-spanner/issues/766)) ([f419e27](https://www.github.com/googleapis/nodejs-spanner/commit/f419e27e24eb8df78633d8245c364a709e58d007))
* return different databases for different pool options ([#754](https://www.github.com/googleapis/nodejs-spanner/issues/754)) ([106c7a5](https://www.github.com/googleapis/nodejs-spanner/commit/106c7a513052631cf08f1db23ed099d2e3178635))
* session pool should use push/pop and return sessions lifo ([#776](https://www.github.com/googleapis/nodejs-spanner/issues/776)) ([384bde1](https://www.github.com/googleapis/nodejs-spanner/commit/384bde1848f2fc72f52601f5b57af17dadebca69))
* transaction runner should not timeout before first attempt ([#789](https://www.github.com/googleapis/nodejs-spanner/issues/789)) ([c75076e](https://www.github.com/googleapis/nodejs-spanner/commit/c75076e01b8480386289c237bc01d0ea2b42c85c)), closes [#786](https://www.github.com/googleapis/nodejs-spanner/issues/786)
* year zero was not accepted for SpannerDate ([#783](https://www.github.com/googleapis/nodejs-spanner/issues/783)) ([0ceb862](https://www.github.com/googleapis/nodejs-spanner/commit/0ceb862beac57f3732e0097d808b62dbdfa5d3a9))

### [4.4.1](https://www.github.com/googleapis/nodejs-spanner/compare/v4.4.0...v4.4.1) (2019-12-16)


### Bug Fixes

* get stacktrace before any async method call ([#756](https://www.github.com/googleapis/nodejs-spanner/issues/756)) ([3091a78](https://www.github.com/googleapis/nodejs-spanner/commit/3091a7849985330828703018b43f6cfabc0e381a))

## [4.4.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.3.0...v4.4.0) (2019-12-10)


### Features

* add plural and singular resource descriptor ([#737](https://www.github.com/googleapis/nodejs-spanner/issues/737)) ([11658bf](https://www.github.com/googleapis/nodejs-spanner/commit/11658bfae8467e6788bb492895e7afb9202c59f4))
* add replica support ([#726](https://www.github.com/googleapis/nodejs-spanner/issues/726)) ([dea3e59](https://www.github.com/googleapis/nodejs-spanner/commit/dea3e599759f374773ed5e4180187e79f518a7b6))


### Bug Fixes

* changes to default rpc timeouts ([da066fc](https://www.github.com/googleapis/nodejs-spanner/commit/da066fc916df4468c5f7d0538aadc5677c5bdb33))
* **deps:** pin TypeScript below 3.7.0 ([7b1e07b](https://www.github.com/googleapis/nodejs-spanner/commit/7b1e07b33f31f93adf125a19db03fa6d5baf0b6b))
* **deps:** update dependency yargs to v15 ([#736](https://www.github.com/googleapis/nodejs-spanner/issues/736)) ([e289890](https://www.github.com/googleapis/nodejs-spanner/commit/e2898907511a3426c6c42204c80765716a3317a6))
* **docs:** snippets are now replaced in jsdoc comments ([#731](https://www.github.com/googleapis/nodejs-spanner/issues/731)) ([843ce6f](https://www.github.com/googleapis/nodejs-spanner/commit/843ce6f1cf14f14ab05c9983f6f5b7a8428fa6c7))
* createInstance should return a value ([#747](https://www.github.com/googleapis/nodejs-spanner/issues/747)) ([16c013f](https://www.github.com/googleapis/nodejs-spanner/commit/16c013f04a02cbc07222f1d571ff0b016646c672))
* include long import in proto typescript declaration file ([#732](https://www.github.com/googleapis/nodejs-spanner/issues/732)) ([6fe0757](https://www.github.com/googleapis/nodejs-spanner/commit/6fe0757d659e7c0835fc8c40b4617c688ce69551))
* restore SessionLeakError name after super call ([#745](https://www.github.com/googleapis/nodejs-spanner/issues/745)) ([d04609b](https://www.github.com/googleapis/nodejs-spanner/commit/d04609b40023b411c08052f503baa54610062994))

## [4.3.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.2.0...v4.3.0) (2019-11-05)


### Features

* **database:** batch create sessions ([#692](https://www.github.com/googleapis/nodejs-spanner/issues/692)) ([21f83b1](https://www.github.com/googleapis/nodejs-spanner/commit/21f83b1b13e12fb413138267dd4dc1bdaa24ccb9))


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#712](https://www.github.com/googleapis/nodejs-spanner/issues/712)) ([03384d4](https://www.github.com/googleapis/nodejs-spanner/commit/03384d4b93a66c758f1db75fa5efa1572f5c1eaf))
* don't wrap SpannerDate so timezone does not affect results ([#711](https://www.github.com/googleapis/nodejs-spanner/issues/711)) ([86c0ae5](https://www.github.com/googleapis/nodejs-spanner/commit/86c0ae5fbdddccd915689bbfff3af8834ec64d12))

## [4.2.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.1.0...v4.2.0) (2019-10-02)


### Bug Fixes

* adjust timeout values ([#700](https://www.github.com/googleapis/nodejs-spanner/issues/700)) ([4571f15](https://www.github.com/googleapis/nodejs-spanner/commit/4571f15))
* use compatible version of google-gax ([d312a8f](https://www.github.com/googleapis/nodejs-spanner/commit/d312a8f))


### Features

* .d.ts for protos ([4d3d649](https://www.github.com/googleapis/nodejs-spanner/commit/4d3d649))

## [4.1.0](https://www.github.com/googleapis/nodejs-spanner/compare/v4.0.2...v4.1.0) (2019-09-16)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([#680](https://www.github.com/googleapis/nodejs-spanner/issues/680)) ([add2f05](https://www.github.com/googleapis/nodejs-spanner/commit/add2f05))
* **types:** import request types from teeny-request ([#682](https://www.github.com/googleapis/nodejs-spanner/issues/682)) ([a1ecd80](https://www.github.com/googleapis/nodejs-spanner/commit/a1ecd80))
* set proper version # for x-goog-api-client ([#681](https://www.github.com/googleapis/nodejs-spanner/issues/681)) ([f300fad](https://www.github.com/googleapis/nodejs-spanner/commit/f300fad))


### Features

* load protos from JSON, grpc-fallback support ([0b3fb90](https://www.github.com/googleapis/nodejs-spanner/commit/0b3fb90))
* support batch create sessions ([#685](https://www.github.com/googleapis/nodejs-spanner/issues/685)) ([7bc58cf](https://www.github.com/googleapis/nodejs-spanner/commit/7bc58cf))
* use JSON proto for transaction-runner ([#690](https://www.github.com/googleapis/nodejs-spanner/issues/690)) ([279fc97](https://www.github.com/googleapis/nodejs-spanner/commit/279fc97))

### [4.0.2](https://www.github.com/googleapis/nodejs-spanner/compare/v4.0.1...v4.0.2) (2019-08-09)


### Bug Fixes

* allow calls with no request, add JSON proto ([4a478a7](https://www.github.com/googleapis/nodejs-spanner/commit/4a478a7))
* **deps:** use the latest extend ([#678](https://www.github.com/googleapis/nodejs-spanner/issues/678)) ([a094fdd](https://www.github.com/googleapis/nodejs-spanner/commit/a094fdd))

### [4.0.1](https://www.github.com/googleapis/nodejs-spanner/compare/v4.0.0...v4.0.1) (2019-07-29)


### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v2 ([#668](https://www.github.com/googleapis/nodejs-spanner/issues/668)) ([86d3638](https://www.github.com/googleapis/nodejs-spanner/commit/86d3638))
* **deps:** update dependency google-auth-library to v5 ([#669](https://www.github.com/googleapis/nodejs-spanner/issues/669)) ([c6d165e](https://www.github.com/googleapis/nodejs-spanner/commit/c6d165e))
* **docs:** move docs under overloads to be picked up by JSDoc ([#666](https://www.github.com/googleapis/nodejs-spanner/issues/666)) ([be10eb1](https://www.github.com/googleapis/nodejs-spanner/commit/be10eb1))

## [4.0.0](https://www.github.com/googleapis/nodejs-spanner/compare/v3.1.0...v4.0.0) (2019-07-19)


### ⚠ BREAKING CHANGES

* **deps:** this will ship async/await in the generated code
* upgrade engines field to >=8.10.0 (#587)

### Bug Fixes

* **deps:** update dependency @google-cloud/common-grpc to v1 ([#607](https://www.github.com/googleapis/nodejs-spanner/issues/607)) ([084dc8c](https://www.github.com/googleapis/nodejs-spanner/commit/084dc8c))
* **deps:** update dependency @google-cloud/paginator to ^0.2.0 ([#560](https://www.github.com/googleapis/nodejs-spanner/issues/560)) ([8fe33a1](https://www.github.com/googleapis/nodejs-spanner/commit/8fe33a1))
* **deps:** update dependency @google-cloud/paginator to v1 ([#593](https://www.github.com/googleapis/nodejs-spanner/issues/593)) ([bfb2255](https://www.github.com/googleapis/nodejs-spanner/commit/bfb2255))
* **deps:** update dependency @google-cloud/precise-date to v1 ([#600](https://www.github.com/googleapis/nodejs-spanner/issues/600)) ([f52494f](https://www.github.com/googleapis/nodejs-spanner/commit/f52494f))
* **deps:** update dependency @google-cloud/projectify to v1 ([#591](https://www.github.com/googleapis/nodejs-spanner/issues/591)) ([22713c1](https://www.github.com/googleapis/nodejs-spanner/commit/22713c1))
* **deps:** update dependency @google-cloud/promisify to v1 ([#592](https://www.github.com/googleapis/nodejs-spanner/issues/592)) ([cb76922](https://www.github.com/googleapis/nodejs-spanner/commit/cb76922))
* **deps:** update dependency arrify to v2 ([#577](https://www.github.com/googleapis/nodejs-spanner/issues/577)) ([6e0ddc8](https://www.github.com/googleapis/nodejs-spanner/commit/6e0ddc8))
* **deps:** update dependency google-auth-library to v4 ([#599](https://www.github.com/googleapis/nodejs-spanner/issues/599)) ([21b9995](https://www.github.com/googleapis/nodejs-spanner/commit/21b9995))
* **deps:** update dependency google-gax to ^0.26.0 ([#586](https://www.github.com/googleapis/nodejs-spanner/issues/586)) ([0f88be2](https://www.github.com/googleapis/nodejs-spanner/commit/0f88be2))
* **deps:** update dependency merge-stream to v2 ([#624](https://www.github.com/googleapis/nodejs-spanner/issues/624)) ([3aa676d](https://www.github.com/googleapis/nodejs-spanner/commit/3aa676d))
* **deps:** update dependency p-queue to v4 ([#558](https://www.github.com/googleapis/nodejs-spanner/issues/558)) ([7547e21](https://www.github.com/googleapis/nodejs-spanner/commit/7547e21))
* **deps:** update dependency p-queue to v5 ([#578](https://www.github.com/googleapis/nodejs-spanner/issues/578)) ([7827fb4](https://www.github.com/googleapis/nodejs-spanner/commit/7827fb4))
* **deps:** update dependency p-queue to v6.0.2 ([#643](https://www.github.com/googleapis/nodejs-spanner/issues/643)) ([ace1359](https://www.github.com/googleapis/nodejs-spanner/commit/ace1359))
* **deps:** upgrade to google-gax 1.x ([#651](https://www.github.com/googleapis/nodejs-spanner/issues/651)) ([a32e838](https://www.github.com/googleapis/nodejs-spanner/commit/a32e838))
* **docs:** add google.type namespace ([#605](https://www.github.com/googleapis/nodejs-spanner/issues/605)) ([5cc6dc1](https://www.github.com/googleapis/nodejs-spanner/commit/5cc6dc1))
* **docs:** link to reference docs section on googleapis.dev ([#654](https://www.github.com/googleapis/nodejs-spanner/issues/654)) ([2379dc2](https://www.github.com/googleapis/nodejs-spanner/commit/2379dc2))
* **docs:** move to new client docs URL ([#647](https://www.github.com/googleapis/nodejs-spanner/issues/647)) ([7dec1bd](https://www.github.com/googleapis/nodejs-spanner/commit/7dec1bd))
* **transaction:** set/update seqno for all sql requests ([#661](https://www.github.com/googleapis/nodejs-spanner/issues/661)) ([102cae1](https://www.github.com/googleapis/nodejs-spanner/commit/102cae1))
* DEADLINE_EXCEEDED is no longer retried ([#598](https://www.github.com/googleapis/nodejs-spanner/issues/598)) ([1cac4fc](https://www.github.com/googleapis/nodejs-spanner/commit/1cac4fc))
* include 'x-goog-request-params' header in requests ([#573](https://www.github.com/googleapis/nodejs-spanner/issues/573)) ([e0cb9dc](https://www.github.com/googleapis/nodejs-spanner/commit/e0cb9dc))
* treat deadline errors as idempotent ([#602](https://www.github.com/googleapis/nodejs-spanner/issues/602)) ([b3d494a](https://www.github.com/googleapis/nodejs-spanner/commit/b3d494a))
* update retry config ([#650](https://www.github.com/googleapis/nodejs-spanner/issues/650)) ([f1e8104](https://www.github.com/googleapis/nodejs-spanner/commit/f1e8104))


### Build System

* upgrade engines field to >=8.10.0 ([#587](https://www.github.com/googleapis/nodejs-spanner/issues/587)) ([970d335](https://www.github.com/googleapis/nodejs-spanner/commit/970d335))


### Features

* add .repo-metadata.json and move to new README template ([#636](https://www.github.com/googleapis/nodejs-spanner/issues/636)) ([11007cf](https://www.github.com/googleapis/nodejs-spanner/commit/11007cf))
* support apiEndpoint override ([#634](https://www.github.com/googleapis/nodejs-spanner/issues/634)) ([6a5eb36](https://www.github.com/googleapis/nodejs-spanner/commit/6a5eb36))
* support apiEndpoint override in client constructor ([#639](https://www.github.com/googleapis/nodejs-spanner/issues/639)) ([f6ebb27](https://www.github.com/googleapis/nodejs-spanner/commit/f6ebb27))


### Miscellaneous Chores

* **deps:** update dependency gts to v1 ([#584](https://www.github.com/googleapis/nodejs-spanner/issues/584)) ([135ac6d](https://www.github.com/googleapis/nodejs-spanner/commit/135ac6d))

## v3.1.0

03-06-2019 20:13 PST

### New Features
- feat(transaction): batch dml ([#550](https://github.com/googleapis/nodejs-spanner/pull/550))

### Dependencies
- chore(deps): update dependency @types/sinon to v7.0.9 ([#553](https://github.com/googleapis/nodejs-spanner/pull/553))
- chore(deps): fix broken dep types ([#549](https://github.com/googleapis/nodejs-spanner/pull/549))

### Documentation
- docs: Update grammar ([#544](https://github.com/googleapis/nodejs-spanner/pull/544))

### Internal / Testing Changes
- chore: update proto docs and code style
- chore(deps): use bundled p-queue types ([#547](https://github.com/googleapis/nodejs-spanner/pull/547))
- build: update release configuration ([#545](https://github.com/googleapis/nodejs-spanner/pull/545))
- build: use node10 to run samples-test, system-test etc ([#551](https://github.com/googleapis/nodejs-spanner/pull/551))

## v3.0.0

02-25-2019 12:38 PST

### Breaking Changes
- breaking: refactor(transaction): split logic into new classes ([#506](https://github.com/googleapis/nodejs-spanner/pull/506))
- breaking: feat(timestamp): create new date/timestamp classes ([#517](https://github.com/googleapis/nodejs-spanner/pull/517))
- fix: run generator to bring in streaming retry configs ([#448](https://github.com/googleapis/nodejs-spanner/pull/448))

#### Read-only Transactions (Snapshots) are no longer runnable via `Database#runTransaction` ([#506](https://github.com/googleapis/nodejs-spanner/pull/506))

`Database#runTransaction` is useful if want to replay a Transaction in its entirety in case you run into an `ABORTED` error. This should never happen with Snapshots, so it felt like it was time to create a new method just for them. *This change also means that `runTransaction` will only ever return read-write transactions.*

Before

```js
const bounds = {
  readOnly: true,
  strong: true,
};

database.runTransaction(bounds, (err, transaction) => {
  // ...
});
```

After

```js
const bounds = {
  strong: true,
};

database.getSnapshot(bounds, (err, snapshot) => {
  // ...
});
```

#### Timestamp bounds now offer nanosecond precision ([#506](https://github.com/googleapis/nodejs-spanner/pull/506))

This change allows you to specify a Snapshot read timestamp with more precision. Previously one could only specify in seconds, but now we support both milliseconds and nanoseconds.

Before

```js
const bounds = {
  exactStaleness: 5
};

const bounds = {
  readTimestamp: Date.now()
};
```

After

```js
const bounds = {
  // millisecond precision for staleness
  exactStaleness: 5000,

  // or if you need nano/micro precision for staleness
  exactStaleness: {seconds: 5, nanos: 321} // => 5000000321 nanoseconds
};

const bounds = {
  readTimestamp: Spanner.timestamp('2019-01-12T00:30:35.381101032Z')
};
```

#### Transaction#end changes. ([#506](https://github.com/googleapis/nodejs-spanner/pull/506))

Transactions saw a sizeable refactor with this version, previously `end()` performed a number of asynchronous tasks when called, however this is no longer true. Because of this, there isn't much of a need to track when end is finished, so we've dropped the callback parameter.

Additionally, `end()` will now be called automatically for failed calls to `Transaction#commit()` and `Transaction#rollback()`. If your code calls end after a failed commit/rollback, it will simply no-op.

Before

```js
transaction.end(callback);
```

After

```js
transaction.end();
callback();
```

#### Session#beginTransaction was removed ([#506](https://github.com/googleapis/nodejs-spanner/pull/506))

Spanner supports 4 different types of Transactions:

* ReadWrite
* ReadOnly
* PartitionedDml
* Batch

Using one method for all types became cumbersome when trying to manage the various options available to each, now each type has its own method.

Before

```js
const transaction = await session.beginTransaction({readWrite: true});
const snapshot = await session.beginTransaction({readOnly: true});
```

After

```js
const transaction = session.transaction();
await transaction.begin();

const snapshot = session.snapshot({strong: true});
await snapshot.begin();
```

#### Timestamps now represented by [`@google-cloud/precise-time`](https://github.com/googleapis/nodejs-precise-date) ([#517](https://github.com/googleapis/nodejs-spanner/pull/517))

While Spanner supports timestamps with nanosecond precision, JavaScript Dates do not. So we created the `PreciseDate` object which extends the native Date and adds both microsecond and nanosecond support.

Before

```js
const timestamp = Spanner.timestamp('2019-01-12T00:30:35.381101032Z');
// => {value: '2019-01-12T00:30:35.381Z'}
```

After

```js
// PreciseDate object
const timestamp = Spanner.timestamp('2019-01-12T00:30:35.381101032Z');
timestamp.toJSON(); // => '2019-01-12T00:30:35.381101032Z'
timestamp.toFullTimeString(); // => '1547253035381101032' (nanoseconds)
```

#### SpannerDate now extends the native Date object. ([#517](https://github.com/googleapis/nodejs-spanner/pull/517))

Since Timestamps saw an update, it made sense to give Spanner Date objects a similar update. The `Spanner.date()` method now returns a native Date object.

Before

```js
const date = Spanner.date('3-22-2018');
// => {value: '2018-3-22'}
```

After

```js
// Date object
const date = Spanner.date('3-22-2018');
date.toJSON(); // => '2018-3-22'
```

### New Features
- refactor(types): enable noImplicitAny in session-pool.ts ([#508](https://github.com/googleapis/nodejs-spanner/pull/508))
- refactor(table): improve typescript defs ([#495](https://github.com/googleapis/nodejs-spanner/pull/495))
- refactor(ts): partial-result-stream types/refactor ([#488](https://github.com/googleapis/nodejs-spanner/pull/488))
- refactor(codec): improve typescript defs ([#490](https://github.com/googleapis/nodejs-spanner/pull/490))
- chore(SessionPool): improve typescript types ([#479](https://github.com/googleapis/nodejs-spanner/pull/479))
- chore(typescript): add types for spanner gapic ([#487](https://github.com/googleapis/nodejs-spanner/pull/487))
- refactor(ts): enable noImplicitAny on src/session.ts ([#457](https://github.com/googleapis/nodejs-spanner/pull/457))

### Bug Fixes
- fix: throw on invalid credentials ([#522](https://github.com/googleapis/nodejs-spanner/pull/522))
- fix(transaction): re-use session in transaction runners ([#540](https://github.com/googleapis/nodejs-spanner/pull/540))

### Dependencies
- chore(deps): update dependency mocha to v6 ([#532](https://github.com/googleapis/nodejs-spanner/pull/532))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#524](https://github.com/googleapis/nodejs-spanner/pull/524))
- chore(deps): update dependency @types/p-retry to v3 ([#521](https://github.com/googleapis/nodejs-spanner/pull/521))
- fix(deps): update dependency yargs to v13 ([#520](https://github.com/googleapis/nodejs-spanner/pull/520))
- fix(deps): update dependency @google-cloud/common-grpc to ^0.10.0 ([#504](https://github.com/googleapis/nodejs-spanner/pull/504))
- fix(deps): update dependency google-gax to ^0.25.0 ([#505](https://github.com/googleapis/nodejs-spanner/pull/505))
- chore(deps): update dependency eslint-config-prettier to v4 ([#502](https://github.com/googleapis/nodejs-spanner/pull/502))
- fix(deps): update dependency google-gax to ^0.24.0 ([#501](https://github.com/googleapis/nodejs-spanner/pull/501))
- fix(deps): update dependency google-auth-library to v3 ([#498](https://github.com/googleapis/nodejs-spanner/pull/498))
- fix(deps): update dependency google-gax to ^0.23.0 ([#496](https://github.com/googleapis/nodejs-spanner/pull/496))
- chore(deps): update dependency concat-stream to v2 ([#489](https://github.com/googleapis/nodejs-spanner/pull/489))
- refactor: removed async from dependency list ([#449](https://github.com/googleapis/nodejs-spanner/pull/449))
- chore(deps): update dependency @types/sinon to v7 ([#480](https://github.com/googleapis/nodejs-spanner/pull/480))
- fix(deps): update dependency p-retry to v3 ([#481](https://github.com/googleapis/nodejs-spanner/pull/481))
- chore(deps): update dependency typescript to ~3.2.0 ([#459](https://github.com/googleapis/nodejs-spanner/pull/459))

### Documentation
- docs: fixed example for table.upsert() ([#533](https://github.com/googleapis/nodejs-spanner/pull/533))
- docs: update links in contrib guide ([#525](https://github.com/googleapis/nodejs-spanner/pull/525))
- docs: update contributing path in README ([#515](https://github.com/googleapis/nodejs-spanner/pull/515))
- docs: add lint/fix example to contributing guide ([#512](https://github.com/googleapis/nodejs-spanner/pull/512))
- docs: fix example comments ([#511](https://github.com/googleapis/nodejs-spanner/pull/511))
- chore: update proto licenses
- build: check broken links in generated docs ([#491](https://github.com/googleapis/nodejs-spanner/pull/491))
- fix(docs): remove unused long running operations and IAM types
- refactor: modernize sample tests ([#484](https://github.com/googleapis/nodejs-spanner/pull/484))
- docs: fix links in docstrings ([#467](https://github.com/googleapis/nodejs-spanner/pull/467))
- docs: fix typo ([#465](https://github.com/googleapis/nodejs-spanner/pull/465))
- chore: update license file ([#464](https://github.com/googleapis/nodejs-spanner/pull/464))
- docs: update readme badges ([#462](https://github.com/googleapis/nodejs-spanner/pull/462))
- docs(samples): Add sample to delete using a mutation. ([#458](https://github.com/googleapis/nodejs-spanner/pull/458))

### Internal / Testing Changes
- chore: add spanner_grpc_config.json and enable grpc-gcp support for spanner ([#503](https://github.com/googleapis/nodejs-spanner/pull/503))
- build: use linkinator for docs test ([#523](https://github.com/googleapis/nodejs-spanner/pull/523))
- build: create docs test npm scripts ([#519](https://github.com/googleapis/nodejs-spanner/pull/519))
- build: test using @grpc/grpc-js in CI ([#516](https://github.com/googleapis/nodejs-spanner/pull/516))
- chore: move CONTRIBUTING.md to root ([#514](https://github.com/googleapis/nodejs-spanner/pull/514))
- refactor: improve generated code style. ([#510](https://github.com/googleapis/nodejs-spanner/pull/510))
- build: ignore googleapis.com in doc link check ([#500](https://github.com/googleapis/nodejs-spanner/pull/500))
- fix: fix the sample tests ([#486](https://github.com/googleapis/nodejs-spanner/pull/486))
- chore(build): inject yoshi automation key ([#478](https://github.com/googleapis/nodejs-spanner/pull/478))
- chore: update nyc and eslint configs ([#477](https://github.com/googleapis/nodejs-spanner/pull/477))
- chore: fix publish.sh permission +x ([#475](https://github.com/googleapis/nodejs-spanner/pull/475))
- fix(build): fix Kokoro release script ([#474](https://github.com/googleapis/nodejs-spanner/pull/474))
- build: add Kokoro configs for autorelease ([#473](https://github.com/googleapis/nodejs-spanner/pull/473))
- chore: always nyc report before calling codecov ([#469](https://github.com/googleapis/nodejs-spanner/pull/469))
- chore: nyc ignore build/test by default ([#468](https://github.com/googleapis/nodejs-spanner/pull/468))
- fix(build): fix system key decryption ([#460](https://github.com/googleapis/nodejs-spanner/pull/460))
- chore: temporarily disable gts ([#534](https://github.com/googleapis/nodejs-spanner/pull/534))

## v2.2.1

11-28-2018 10:43 PST


### Implementation Changes
- Update package.json to include the build directory ([#454](https://github.com/googleapis/nodejs-spanner/pull/454))

## v2.2.0

11-27-2018 09:13 PST


### Implementation Changes
- fix: transaction async error handling that not thrown the full error ([#447](https://github.com/googleapis/nodejs-spanner/pull/447))
- fix(transaction): accept json options in run/runStream ([#446](https://github.com/googleapis/nodejs-spanner/pull/446))
- refactor(transaction): error handling ([#360](https://github.com/googleapis/nodejs-spanner/pull/360))
- refactor(ts): enable noImplicitThis in the tsconfig ([#411](https://github.com/googleapis/nodejs-spanner/pull/411))
- refactor(ts): use import/export for local files ([#408](https://github.com/googleapis/nodejs-spanner/pull/408))
- refactor(ts): add type packages for many things ([#406](https://github.com/googleapis/nodejs-spanner/pull/406))
- refactor(ts): convert tests to typescript ([#404](https://github.com/googleapis/nodejs-spanner/pull/404))
- refactor(typescript): rename src and system-test files to *.ts ([#402](https://github.com/googleapis/nodejs-spanner/pull/402))
- refactor(typescript): perform initial TypeScript conversion ([#384](https://github.com/googleapis/nodejs-spanner/pull/384))
- fix: Only run mutations inside of a transaction. ([#361](https://github.com/googleapis/nodejs-spanner/pull/361))

### New Features
- feat(session): add label support ([#373](https://github.com/googleapis/nodejs-spanner/pull/373))

### Dependencies
- chore(deps): update dependency @types/sinon to v5.0.7 ([#444](https://github.com/googleapis/nodejs-spanner/pull/444))
- fix: Pin @types/sinon to last compatible version ([#443](https://github.com/googleapis/nodejs-spanner/pull/443))
- chore(deps): update dependency @types/p-queue to v3 ([#440](https://github.com/googleapis/nodejs-spanner/pull/440))
- fix(deps): update dependency google-gax to ^0.22.0 ([#435](https://github.com/googleapis/nodejs-spanner/pull/435))
- chore(deps): update dependency gts to ^0.9.0 ([#434](https://github.com/googleapis/nodejs-spanner/pull/434))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#429](https://github.com/googleapis/nodejs-spanner/pull/429))
- chore(deps): update dependency @types/is to v0.0.21 ([#426](https://github.com/googleapis/nodejs-spanner/pull/426))
- fix(deps): update dependency through2 to v3 ([#423](https://github.com/googleapis/nodejs-spanner/pull/423))
- chore: remove unused google-proto-files dep ([#421](https://github.com/googleapis/nodejs-spanner/pull/421))
- chore(deps): update dependency eslint-plugin-node to v8 ([#407](https://github.com/googleapis/nodejs-spanner/pull/407))
- refactor: drop dependency on delay ([#383](https://github.com/googleapis/nodejs-spanner/pull/383))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#369](https://github.com/googleapis/nodejs-spanner/pull/369))
- chore(deps): update dependency sinon to v7 ([#371](https://github.com/googleapis/nodejs-spanner/pull/371))

### Documentation
- docs(samples): updated samples code to use async await ([#385](https://github.com/googleapis/nodejs-spanner/pull/385))
- Add Cloud Spanner DML/PDML samples. ([#366](https://github.com/googleapis/nodejs-spanner/pull/366))

### Internal / Testing Changes
- chore: add synth.metadata
- test: fix broken tests ([#441](https://github.com/googleapis/nodejs-spanner/pull/441))
- refactor(samples): convert ava tests to mocha ([#400](https://github.com/googleapis/nodejs-spanner/pull/400))
- chore: update eslintignore config ([#433](https://github.com/googleapis/nodejs-spanner/pull/433))
- chore(build): fix lint rules and build for generated code ([#430](https://github.com/googleapis/nodejs-spanner/pull/430))
- chore: drop contributors from multiple places ([#427](https://github.com/googleapis/nodejs-spanner/pull/427))
- chore: use latest npm on Windows ([#425](https://github.com/googleapis/nodejs-spanner/pull/425))
- fix: update source location for synth ([#422](https://github.com/googleapis/nodejs-spanner/pull/422))
- fix: re-enable linting and formatting ([#420](https://github.com/googleapis/nodejs-spanner/pull/420))
- chore: improve typescript config and types ([#417](https://github.com/googleapis/nodejs-spanner/pull/417))
- chore: update CircleCI config ([#416](https://github.com/googleapis/nodejs-spanner/pull/416))
- chore: run gts fix ([#413](https://github.com/googleapis/nodejs-spanner/pull/413))
- chore: remove old issue template ([#397](https://github.com/googleapis/nodejs-spanner/pull/397))
- chore: update issue templates ([#401](https://github.com/googleapis/nodejs-spanner/pull/401))
- build: run tests on node11 ([#395](https://github.com/googleapis/nodejs-spanner/pull/395))
- chores(build): do not collect sponge.xml from windows builds ([#389](https://github.com/googleapis/nodejs-spanner/pull/389))
- chores(build): run codecov on continuous builds ([#386](https://github.com/googleapis/nodejs-spanner/pull/386))
- chore: update new issue template ([#382](https://github.com/googleapis/nodejs-spanner/pull/382))
- fix(tests): use unique label for tests ([#367](https://github.com/googleapis/nodejs-spanner/pull/367))
- build: fix codecov uploading on Kokoro ([#372](https://github.com/googleapis/nodejs-spanner/pull/372))
- build(kokoro): test with spanner key ([#364](https://github.com/googleapis/nodejs-spanner/pull/364))

## v2.1.0

### Implementation Changes
- chore: use arrow functions ([#359](https://github.com/googleapis/nodejs-spanner/pull/359))
- fix: change exists to return false on error code 5 ([#353](https://github.com/googleapis/nodejs-spanner/pull/353))
- Switch to let/const ([#328](https://github.com/googleapis/nodejs-spanner/pull/328))
- Minor: wrap the inner error on retried transactions and return when deadline exceeded ([#309](https://github.com/googleapis/nodejs-spanner/pull/309))
- chore: convert index to es6 class ([#306](https://github.com/googleapis/nodejs-spanner/pull/306))
- Fix p-retry is accepting function not object/promise ([#312](https://github.com/googleapis/nodejs-spanner/pull/312))

### New Features
- feat: dml/pdml support ([#348](https://github.com/googleapis/nodejs-spanner/pull/348))
- feat(table): drop method and additional error handling to delete ([#358](https://github.com/googleapis/nodejs-spanner/pull/358))
- feat(PartialResultStream): emit raw responses as event ([#357](https://github.com/googleapis/nodejs-spanner/pull/357))
- feat(transaction): add backup backoff delay ([#350](https://github.com/googleapis/nodejs-spanner/pull/350))

### Dependencies
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#351](https://github.com/googleapis/nodejs-spanner/pull/351))
- fix(deps): update dependency @google-cloud/common-grpc to ^0.9.0 ([#339](https://github.com/googleapis/nodejs-spanner/pull/339))
- fix(deps): update dependency google-gax to ^0.20.0 ([#327](https://github.com/googleapis/nodejs-spanner/pull/327))
- fix(deps): update dependency delay to v4 ([#322](https://github.com/googleapis/nodejs-spanner/pull/322))
- fix: upgrade to the latest common-grpc ([#320](https://github.com/googleapis/nodejs-spanner/pull/320))
- fix(deps): update dependency google-auth-library to v2 ([#319](https://github.com/googleapis/nodejs-spanner/pull/319))
- fix(deps): update dependency p-queue to v3 ([#317](https://github.com/googleapis/nodejs-spanner/pull/317))
- chore(deps): update dependency nyc to v13 ([#314](https://github.com/googleapis/nodejs-spanner/pull/314))

### Documentation
- docs: add typedefs for commit timestamp ([#356](https://github.com/googleapis/nodejs-spanner/pull/356))
- docs: various jsdoc fixes ([#352](https://github.com/googleapis/nodejs-spanner/pull/352))

### Internal / Testing Changes
- chore: update auto-generated config ([#362](https://github.com/googleapis/nodejs-spanner/pull/362))
- chore: change queries to return expected values ([#355](https://github.com/googleapis/nodejs-spanner/pull/355))
- Update CI config ([#354](https://github.com/googleapis/nodejs-spanner/pull/354))
- chore: make sure workloadb benchmark runs properly ([#349](https://github.com/googleapis/nodejs-spanner/pull/349))
- test: Add delay for system test. ([#16](https://github.com/googleapis/nodejs-spanner/pull/16))
- Update QuickStart to use "new" syntax for creating Spanner client. ([#344](https://github.com/googleapis/nodejs-spanner/pull/344))
- test: remove appveyor config ([#342](https://github.com/googleapis/nodejs-spanner/pull/342))
- Update CI config ([#341](https://github.com/googleapis/nodejs-spanner/pull/341))
- Fix the failing lint rules ([#338](https://github.com/googleapis/nodejs-spanner/pull/338))
- Enable prefer-const in the eslint config ([#337](https://github.com/googleapis/nodejs-spanner/pull/337))
- soften assertion in system tests ([#335](https://github.com/googleapis/nodejs-spanner/pull/335))
- Update protos and comments ([#334](https://github.com/googleapis/nodejs-spanner/pull/334))
- fix string comparison in system test ([#333](https://github.com/googleapis/nodejs-spanner/pull/333))
- Enable no-var in eslint ([#331](https://github.com/googleapis/nodejs-spanner/pull/331))
- Add synth templates ([#330](https://github.com/googleapis/nodejs-spanner/pull/330))
- test: throw on deprecation ([#279](https://github.com/googleapis/nodejs-spanner/pull/279))
- Retry npm install in CI ([#323](https://github.com/googleapis/nodejs-spanner/pull/323))
- Re-generate library using /synth.py ([#316](https://github.com/googleapis/nodejs-spanner/pull/316))
- Fix color highlighting in CHANGELOG.md ([#313](https://github.com/googleapis/nodejs-spanner/pull/313))
- Update sample dependency @google-cloud/spanner to v2 ([#310](https://github.com/googleapis/nodejs-spanner/pull/310))
- Re-generate library using /synth.py ([#308](https://github.com/googleapis/nodejs-spanner/pull/308))

## v2.0.0

### Breaking Changes
- Drop support for Node.js v4.x.x and v9.x.x (#226)

- Use es style imports (#302)
  The import syntax for this library has changed to be [es module](https://nodejs.org/api/esm.html) compliant.

  #### Old code
  ```js
  const spanner = require('@google-cloud/spanner')();
  // or
  const Spanner = require('@google-cloud/spanner');
  const spanner = new Spanner();
  ```

  #### New code
  ```js
  const {Spanner} = require('@google-cloud/spanner');
  const spanner = new Spanner();
  ```

### New Features
- add runTransactionAsync method (#294)
  ```js
  const {Spanner} = require('@google-cloud/spanner');
  const spanner = new Spanner();

  const instance = spanner.instance('my-instance');
  const database = instance.database('my-database');

  await database.runTransactionAsync(async (transaction) => {
      const [rows] = await transaction.run('SELECT * FROM MyTable');
      const data = rows.map(row => row.thing);
      await transaction.commit();
      return data;
  }).then(data => {
    // ...
  });
  ```
- feature(database): make session pool hot swappable (#243)

### Implementation Changes
- feat: use es style imports (#302)
- fix: perform type check on grpc value (#300)
- chore: use es classes in a few places (#297)
- chore: do not use npm ci (#292)
- chore: split the common module (#289)
- test: fix strict equal assertions (#287)
- chore: ignore package-lock.json (#286)
- chore: use let and const (#283)
- chore: update renovate config (#281)
- Re-generate library using /synth.py (#282)
- chore: use assert.deepStrictEqual instead of assert.deepEqual (#274)
- chore: require node 8 for samples (#273)
- test: use strictEqual in tests (#267)
- use node_library not not internal generate method (#247)
- Configure Renovate (#239)
- fix: drop support for node.js 4.x and 9.x (#226)

### Dependencies
- fix(deps): update dependency google-gax to ^0.19.0 (#298)
- chore(deps): update dependency eslint-config-prettier to v3 (#295)
- fix(deps): update dependency google-gax to ^0.18.0 (#278)
- chore(deps): update dependency eslint-plugin-node to v7 (#266)
- refactor: update auth library, common-grpc (#256)
- fix(deps): update dependency yargs to v12 (#254)
- chore(deps): update dependency yargs to v12 (#252)
- chore(deps): update dependency sinon to v6.0.1 (#250)
- chore(package): update eslint to version 5.0.0 (#240)
- chore: update sample lockfiles (#246)
- Update to support google-gax v0.17 (#244)
- fix(package): update @google-cloud/common-grpc to version 0.7.1 (#235)
- refactor: drop dependency on safe-buffer (#232)
- refactor: remove dependency generic-pool (#231)
- refactor: drop dependency on lodash.flatten (#233)
- refactor: remove array-uniq as dependency (#227)
- refactor: remove string-obj-format (#229)
- refactor: remove methmeth as a dependency (#228)
- chore: upgrade several dependencies (#221)

### Internal / Testing Changes
- chore: move mocha options to mocha.opts (#272)
- refactor: drop repo-tool as an exec wrapper (#248)
- fix: update linking for samples (#242)
- Adding Spanner STRUCT param samples (#219)
