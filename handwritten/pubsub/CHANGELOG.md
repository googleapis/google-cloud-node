# Changelog

[npm history][1]

[1]: https://www.npmjs.com/package/@google-cloud/pubsub?activeTab=versions

## [5.3.0](https://github.com/googleapis/nodejs-pubsub/compare/v5.2.4...v5.3.0) (2026-02-19)


### Features

* Manual proto pushing ([#2134](https://github.com/googleapis/nodejs-pubsub/issues/2134)) ([2f1e8d1](https://github.com/googleapis/nodejs-pubsub/commit/2f1e8d198ffbc14795f9f0d0a88095d69ac437a3))

## [5.2.4](https://github.com/googleapis/nodejs-pubsub/compare/v5.2.3...v5.2.4) (2026-02-11)


### Bug Fixes

* **deps:** Update all dependencies ([#2105](https://github.com/googleapis/nodejs-pubsub/issues/2105)) ([c7d42e3](https://github.com/googleapis/nodejs-pubsub/commit/c7d42e391eac92137abd8aeb2ac25bc89856aa15))

## [5.2.3](https://github.com/googleapis/nodejs-pubsub/compare/v5.2.2...v5.2.3) (2026-02-11)


### Bug Fixes

* Clean up earlier refactor issues with maxExtensionTime ([#2127](https://github.com/googleapis/nodejs-pubsub/issues/2127)) ([c22471d](https://github.com/googleapis/nodejs-pubsub/commit/c22471de60c63d9420c037ca3269af8b7dbf9d92))

## [5.2.2](https://github.com/googleapis/nodejs-pubsub/compare/v5.2.1...v5.2.2) (2026-01-14)


### Bug Fixes

* **WaitForProcessing:** Shutdown option `WaitForProcessing` never entered on subscription close ([#2118](https://github.com/googleapis/nodejs-pubsub/issues/2118)) ([e99b37e](https://github.com/googleapis/nodejs-pubsub/commit/e99b37e28ce551ad24325ac951ac33a60f8faa99))

## [5.2.1](https://github.com/googleapis/nodejs-pubsub/compare/v5.2.0...v5.2.1) (2025-12-19)


### Bug Fixes

* Check batch size before re-queueing retried messages ([#2027](https://github.com/googleapis/nodejs-pubsub/issues/2027)) ([6c1613f](https://github.com/googleapis/nodejs-pubsub/commit/6c1613fdc6258ccb85427fc371e7bac8082f4a96))
* Move off the remaining rc versions ([#2112](https://github.com/googleapis/nodejs-pubsub/issues/2112)) ([a9eb883](https://github.com/googleapis/nodejs-pubsub/commit/a9eb88335df62606ab3e6cbe11c1d760d1ddbc96))
* Only close the rpcSpan once ([#2121](https://github.com/googleapis/nodejs-pubsub/issues/2121)) ([118a960](https://github.com/googleapis/nodejs-pubsub/commit/118a960b8cfca6203ad1843453c3692b07a94952))
* Updated span kind to CLIENT for ack and modack rpc spans ([#2029](https://github.com/googleapis/nodejs-pubsub/issues/2029)) ([801c1c8](https://github.com/googleapis/nodejs-pubsub/commit/801c1c862a986eefe1eddd2e014be4612cd394d8))

## [5.2.0](https://github.com/googleapis/nodejs-pubsub/compare/v5.1.0...v5.2.0) (2025-08-07)


### Features

* Ad-hoc, targeted debug logging ([#2062](https://github.com/googleapis/nodejs-pubsub/issues/2062)) ([dce83c7](https://github.com/googleapis/nodejs-pubsub/commit/dce83c71bba54388334f4f73115e7b8da6fbdb67))
* Add timeout option and graceful shutdown to Subscription.close() ([#2068](https://github.com/googleapis/nodejs-pubsub/issues/2068)) ([8dee024](https://github.com/googleapis/nodejs-pubsub/commit/8dee0248081f7156e42d79c6067902583586faf2))

## [5.1.0](https://github.com/googleapis/nodejs-pubsub/compare/v5.0.0...v5.1.0) (2025-06-04)


### Features

* Add SchemaViolationReason to IngestionFailureEvent ([#2045](https://github.com/googleapis/nodejs-pubsub/issues/2045)) ([3348e3e](https://github.com/googleapis/nodejs-pubsub/commit/3348e3e6195405608e380e5291e6107bcba855cb))
* Use specific W3CTraceContextPropagator for OTel ([#2036](https://github.com/googleapis/nodejs-pubsub/issues/2036)) ([c9a9656](https://github.com/googleapis/nodejs-pubsub/commit/c9a9656b8ae4b6e26c0a90c6ea53f5387e1bb846))


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.33.0 ([#2038](https://github.com/googleapis/nodejs-pubsub/issues/2038)) ([4eb46c5](https://github.com/googleapis/nodejs-pubsub/commit/4eb46c56a941cfb4616785269cc97d9eeca7f174))
* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.34.0 ([#2048](https://github.com/googleapis/nodejs-pubsub/issues/2048)) ([1072c2d](https://github.com/googleapis/nodejs-pubsub/commit/1072c2ddbe2445bac92328e58fbf76e45b464e50))
* **deps:** Update dependency protobufjs to ~7.5.0 ([#2041](https://github.com/googleapis/nodejs-pubsub/issues/2041)) ([b65eaeb](https://github.com/googleapis/nodejs-pubsub/commit/b65eaebdc54974a81f60f1901e2bd68c2bfd9b92))
* Set messaging.operation in createAttributes ([#2030](https://github.com/googleapis/nodejs-pubsub/issues/2030)) ([b8d513a](https://github.com/googleapis/nodejs-pubsub/commit/b8d513a3901ae6c160c3f797ed0a41fc0d697fac))

## [5.0.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.11.0...v5.0.0) (2025-04-28)


### ⚠ BREAKING CHANGES

* migrate to Node 18 ([#2024](https://github.com/googleapis/nodejs-pubsub/issues/2024))
* remove (broken) legacy OTel support
* remove legacy ack deadline options
* move maxExtension into subscriber options

### Miscellaneous Chores

* Migrate to Node 18 ([#2024](https://github.com/googleapis/nodejs-pubsub/issues/2024)) ([9ad808a](https://github.com/googleapis/nodejs-pubsub/commit/9ad808adb99b6e64c2c4431991721deae14b6400))

## [4.11.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.10.0...v4.11.0) (2025-03-27)


### Features

* Add required messaging.operation span attrs for OTel sem convs 1.24 ([#2019](https://github.com/googleapis/nodejs-pubsub/issues/2019)) ([70ed2d7](https://github.com/googleapis/nodejs-pubsub/commit/70ed2d73588290834dd25bfffb201272433e5614))


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.29.0 ([#2012](https://github.com/googleapis/nodejs-pubsub/issues/2012)) ([bfe8243](https://github.com/googleapis/nodejs-pubsub/commit/bfe82434492a95fc24ee54ff947d0e52d5e93195))
* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.30.0 ([#2014](https://github.com/googleapis/nodejs-pubsub/issues/2014)) ([7f8366a](https://github.com/googleapis/nodejs-pubsub/commit/7f8366a636398d758aec5b2f933607f5021043a7))
* Type widening to match gapic, and two typing fixes ([#2020](https://github.com/googleapis/nodejs-pubsub/issues/2020)) ([9cd73b3](https://github.com/googleapis/nodejs-pubsub/commit/9cd73b33980b7f02fe507a3a52042112690ab62c))

## [4.10.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.9.0...v4.10.0) (2025-01-13)


### Features

* Add Kafka-based sources to IngestionDataSourceSettings proto and IngestionFailureEvent proto ([#2007](https://github.com/googleapis/nodejs-pubsub/issues/2007)) ([08d00a1](https://github.com/googleapis/nodejs-pubsub/commit/08d00a1e7d30e2ab47f7582ff61b1eb73ad9d25e))


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.28.0 ([#2001](https://github.com/googleapis/nodejs-pubsub/issues/2001)) ([c8e5811](https://github.com/googleapis/nodejs-pubsub/commit/c8e581124523edcac13d6d6c48d67342482959f3))

## [4.9.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.8.0...v4.9.0) (2024-11-12)


### Features

* Add IngestionFailureEvent to the external proto ([#1984](https://github.com/googleapis/nodejs-pubsub/issues/1984)) ([7075430](https://github.com/googleapis/nodejs-pubsub/commit/70754309fb600c54d0a573f2d49ad4c419577550))


### Bug Fixes

* KiB, not MiB for ack size limits ([#1999](https://github.com/googleapis/nodejs-pubsub/issues/1999)) ([798270d](https://github.com/googleapis/nodejs-pubsub/commit/798270db9c5ef71f75c3e24e70d9592bbd068212))

## [4.8.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.7.2...v4.8.0) (2024-10-15)


### Features

* Add ingestion Cloud Storage fields and Platform Logging fields to Topic ([#1974](https://github.com/googleapis/nodejs-pubsub/issues/1974)) ([afec9a1](https://github.com/googleapis/nodejs-pubsub/commit/afec9a1ad3f665a71f08e748623f0fdaa332d17b))
* Return listing information for subscriptions created via Analytics Hub ([afec9a1](https://github.com/googleapis/nodejs-pubsub/commit/afec9a1ad3f665a71f08e748623f0fdaa332d17b))

## [4.7.2](https://github.com/googleapis/nodejs-pubsub/compare/v4.7.1...v4.7.2) (2024-09-13)


### Bug Fixes

* Set MaxBytes for AckQueue ([#1963](https://github.com/googleapis/nodejs-pubsub/issues/1963)) ([5945563](https://github.com/googleapis/nodejs-pubsub/commit/594556315f159f4197ffc0e7249ce1b0339c12ec))

## [4.7.1](https://github.com/googleapis/nodejs-pubsub/compare/v4.7.0...v4.7.1) (2024-08-26)


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.26.0 ([#1945](https://github.com/googleapis/nodejs-pubsub/issues/1945)) ([f082869](https://github.com/googleapis/nodejs-pubsub/commit/f082869a185c059463654c76c744e44e7b28415e))
* **deps:** Update dependency protobufjs to ~7.4.0 ([#1959](https://github.com/googleapis/nodejs-pubsub/issues/1959)) ([25946e0](https://github.com/googleapis/nodejs-pubsub/commit/25946e0d4fe794202984cdad6cf48121f72063cf))
* Propagate set options to LeaseManager (from https://github.com/googleapis/nodejs-pubsub/pull/1880) ([#1954](https://github.com/googleapis/nodejs-pubsub/issues/1954)) ([cdb0916](https://github.com/googleapis/nodejs-pubsub/commit/cdb0916bd30da67f5153c9aead09e7f505954253))

## [4.7.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.6.0...v4.7.0) (2024-08-24)


### Features

* Add support for OTel context propagation and harmonized spans ([#1833](https://github.com/googleapis/nodejs-pubsub/issues/1833)) ([4b5c90d](https://github.com/googleapis/nodejs-pubsub/commit/4b5c90dc334e90cefb4da3c6fe9ce027b50aacb8))

## [4.6.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.5.0...v4.6.0) (2024-07-12)


### Features

* Add max messages batching for Cloud Storage subscriptions ([#1956](https://github.com/googleapis/nodejs-pubsub/issues/1956)) ([90546f6](https://github.com/googleapis/nodejs-pubsub/commit/90546f634cc4e510185e20a4d1ba1c74ebc59b85))
* Add use_topic_schema for Cloud Storage Subscriptions ([#1948](https://github.com/googleapis/nodejs-pubsub/issues/1948)) ([120fa1b](https://github.com/googleapis/nodejs-pubsub/commit/120fa1bca0516185e109260c69ea91eb7ddeecd0))


### Bug Fixes

* **docs samples:** Update missing argv in sample metadata for push subscription ([#1946](https://github.com/googleapis/nodejs-pubsub/issues/1946)) ([34b8c03](https://github.com/googleapis/nodejs-pubsub/commit/34b8c03f90618ba6ae506764b9d97d9db84dcada))

## [4.5.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.4.1...v4.5.0) (2024-06-11)


### Features

* Add service_account_email for export subscriptions ([#1927](https://github.com/googleapis/nodejs-pubsub/issues/1927)) ([c532854](https://github.com/googleapis/nodejs-pubsub/commit/c53285473c2c0973baf5932e52d2d135958c6948))

## [4.4.1](https://github.com/googleapis/nodejs-pubsub/compare/v4.4.0...v4.4.1) (2024-05-30)


### Bug Fixes

* An existing message `UpdateVehicleLocationRequest` is removed ([5451d15](https://github.com/googleapis/nodejs-pubsub/commit/5451d150e77d46a475e7a8e150a7f6b5d04d6448))
* An existing method `SearchFuzzedVehicles` is removed from service `VehicleService` ([5451d15](https://github.com/googleapis/nodejs-pubsub/commit/5451d150e77d46a475e7a8e150a7f6b5d04d6448))
* An existing method `UpdateVehicleLocation` is removed from service `VehicleService` ([5451d15](https://github.com/googleapis/nodejs-pubsub/commit/5451d150e77d46a475e7a8e150a7f6b5d04d6448))
* **deps:** Update dependency protobufjs to ~7.3.0 ([#1921](https://github.com/googleapis/nodejs-pubsub/issues/1921)) ([c5afd34](https://github.com/googleapis/nodejs-pubsub/commit/c5afd3400cc8ff9f920b4b232c4e4a5fb41eb07b))
* Pull in new gax for protobufjs vuln fix ([#1925](https://github.com/googleapis/nodejs-pubsub/issues/1925)) ([8024c6d](https://github.com/googleapis/nodejs-pubsub/commit/8024c6d2e4ce69f97fd8b64bb9f076e33d47c662))

## [4.4.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.3.3...v4.4.0) (2024-05-03)


### Features

* Add several fields to manage state of database encryption update ([#1904](https://github.com/googleapis/nodejs-pubsub/issues/1904)) ([aba9aee](https://github.com/googleapis/nodejs-pubsub/commit/aba9aee0c8ecc840c150aa077892b7bb88f18eca))


### Bug Fixes

* **deps:** Update dependency @types/long to v5 ([#1901](https://github.com/googleapis/nodejs-pubsub/issues/1901)) ([d13d395](https://github.com/googleapis/nodejs-pubsub/commit/d13d395341efacf926a126bf756873922f6bbab7))

## [4.3.3](https://github.com/googleapis/nodejs-pubsub/compare/v4.3.2...v4.3.3) (2024-03-03)


### Bug Fixes

* Add client library version to headers ([#1891](https://github.com/googleapis/nodejs-pubsub/issues/1891)) ([6b59195](https://github.com/googleapis/nodejs-pubsub/commit/6b59195aed8b6c6576e50512aeca9123ad0cc016))

## [4.3.2](https://github.com/googleapis/nodejs-pubsub/compare/v4.3.1...v4.3.2) (2024-02-13)


### Bug Fixes

* Update minimum google-gax versions for auth fixes ([#1888](https://github.com/googleapis/nodejs-pubsub/issues/1888)) ([08acade](https://github.com/googleapis/nodejs-pubsub/commit/08acadee042c6a3b85344575d5d0be09ae6e4202))

## [4.3.1](https://github.com/googleapis/nodejs-pubsub/compare/v4.3.0...v4.3.1) (2024-02-08)


### Bug Fixes

* Add option to manually control emulator auth handling, and fix heuristics for TPC ([#1861](https://github.com/googleapis/nodejs-pubsub/issues/1861)) ([761cdc8](https://github.com/googleapis/nodejs-pubsub/commit/761cdc898c69715e6775d2f5913ead1fca2def02))

## [4.3.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.2.0...v4.3.0) (2024-02-05)


### Features

* Trusted Private Cloud support, use the universeDomain parameter ([#1878](https://github.com/googleapis/nodejs-pubsub/issues/1878)) ([d89fd1d](https://github.com/googleapis/nodejs-pubsub/commit/d89fd1d90b352f0cc7a50a72c5fec4aab6660f8f))


### Bug Fixes

* Updated google-gax required for TPC ([#1882](https://github.com/googleapis/nodejs-pubsub/issues/1882)) ([1445856](https://github.com/googleapis/nodejs-pubsub/commit/144585699595b97f1a4cc28551e45fe23305f480))

## [4.2.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.1.1...v4.2.0) (2024-02-01)


### Features

* Add enforce_in_transit fields and optional annotations ([#1873](https://github.com/googleapis/nodejs-pubsub/issues/1873)) ([09fc424](https://github.com/googleapis/nodejs-pubsub/commit/09fc4241c8782d2f60c1a78dda316628eca5f751))
* Add schema revision samples ([#1870](https://github.com/googleapis/nodejs-pubsub/issues/1870)) ([044e149](https://github.com/googleapis/nodejs-pubsub/commit/044e1494d82fd64010f7c6f872982d659e753499))


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.20.0 ([#1871](https://github.com/googleapis/nodejs-pubsub/issues/1871)) ([2ee0dba](https://github.com/googleapis/nodejs-pubsub/commit/2ee0dba67e6d66d9a678796de6172bcafd28796b))
* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.21.0 ([#1876](https://github.com/googleapis/nodejs-pubsub/issues/1876)) ([0fe61a9](https://github.com/googleapis/nodejs-pubsub/commit/0fe61a95b3bfc21bd1a5176c7fbd7f822ece5a5c))

## [4.1.1](https://github.com/googleapis/nodejs-pubsub/compare/v4.1.0...v4.1.1) (2024-01-05)


### Bug Fixes

* Correct long audio synthesis HTTP binding ([#1867](https://github.com/googleapis/nodejs-pubsub/issues/1867)) ([65940a4](https://github.com/googleapis/nodejs-pubsub/commit/65940a40fe8f2301690d26f769571a198f747dd3))
* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.19.0 ([#1862](https://github.com/googleapis/nodejs-pubsub/issues/1862)) ([92259f5](https://github.com/googleapis/nodejs-pubsub/commit/92259f5bffee05036f1746990b021299ea3ea4e7))

## [4.1.0](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.7...v4.1.0) (2023-12-04)


### Features

* Add `use_table_schema` field to BigQueryConfig ([#1858](https://github.com/googleapis/nodejs-pubsub/issues/1858)) ([2875d83](https://github.com/googleapis/nodejs-pubsub/commit/2875d8383831563e5b748e96094faa94bf25fc15))

## [4.0.7](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.6...v4.0.7) (2023-11-09)


### Bug Fixes

* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.18.0 ([#1852](https://github.com/googleapis/nodejs-pubsub/issues/1852)) ([d9a0432](https://github.com/googleapis/nodejs-pubsub/commit/d9a0432a37c6d741c9694a5bcff047f4c85b2feb))
* Set x-goog-request-params for streaming pull request ([#1849](https://github.com/googleapis/nodejs-pubsub/issues/1849)) ([7b82ff0](https://github.com/googleapis/nodejs-pubsub/commit/7b82ff01e5c654b3e339dfdec5b3da8bf45da049))

## [4.0.6](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.5...v4.0.6) (2023-09-15)


### Bug Fixes

* Bump the minimum gax up to 4.0.4 to get grpc-js fixes ([#1829](https://github.com/googleapis/nodejs-pubsub/issues/1829)) ([cc86e2b](https://github.com/googleapis/nodejs-pubsub/commit/cc86e2b4f3593d3d6046dc5baee76e1431832acb))
* **deps:** Update dependency @opentelemetry/semantic-conventions to ~1.17.0 ([#1824](https://github.com/googleapis/nodejs-pubsub/issues/1824)) ([679c6b8](https://github.com/googleapis/nodejs-pubsub/commit/679c6b82bdb6fe28c3bc8c31db2e10de1ee7e089))

## [4.0.5](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.4...v4.0.5) (2023-09-07)


### Bug Fixes

* Always fill the topic and sub names when creating from a PubSub object ([#1816](https://github.com/googleapis/nodejs-pubsub/issues/1816)) ([be8ed53](https://github.com/googleapis/nodejs-pubsub/commit/be8ed530e327e2bd08a49200492f0a163b3b91d7))

## [4.0.4](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.3...v4.0.4) (2023-09-05)


### Bug Fixes

* Set grpc keepalive time|outs by default ([#1814](https://github.com/googleapis/nodejs-pubsub/issues/1814)) ([13d89a2](https://github.com/googleapis/nodejs-pubsub/commit/13d89a2b4e25f340ef492d586bfa8cc3a9a6d6cf))

## [4.0.3](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.2...v4.0.3) (2023-08-31)


### Bug Fixes

* Simplify logic for HTTP/1.1 REST fallback option ([#1809](https://github.com/googleapis/nodejs-pubsub/issues/1809)) ([f26008d](https://github.com/googleapis/nodejs-pubsub/commit/f26008de84f201ec6e0180582d8a4bebc3d5ced0))

## [4.0.2](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.1...v4.0.2) (2023-08-24)


### Bug Fixes

* Make retry policy back off more aggressively for RPCs that retry RESOURCE_EXHAUSTD ([#1806](https://github.com/googleapis/nodejs-pubsub/issues/1806)) ([e9969ba](https://github.com/googleapis/nodejs-pubsub/commit/e9969bab92c38f1509b157034fcdbe5d5ec63903))

## [4.0.1](https://github.com/googleapis/nodejs-pubsub/compare/v4.0.0...v4.0.1) (2023-08-11)


### Bug Fixes

* **deps:** Update dependency @google-cloud/paginator to v5 ([#1799](https://github.com/googleapis/nodejs-pubsub/issues/1799)) ([3195d21](https://github.com/googleapis/nodejs-pubsub/commit/3195d21bf817cf10daa86b019532c9405dc42405))
* **deps:** Update dependency @google-cloud/precise-date to v4 ([#1803](https://github.com/googleapis/nodejs-pubsub/issues/1803)) ([2c22d67](https://github.com/googleapis/nodejs-pubsub/commit/2c22d67b0fbaf3409101a830ee0c5be002ed6c7b))
* **deps:** Update dependency @google-cloud/projectify to v4 ([#1800](https://github.com/googleapis/nodejs-pubsub/issues/1800)) ([5787d56](https://github.com/googleapis/nodejs-pubsub/commit/5787d56b95d46544bf8c59fe4bc4cb374bc53d0a))
* **deps:** Update dependency @google-cloud/promisify to v4 ([#1798](https://github.com/googleapis/nodejs-pubsub/issues/1798)) ([093c46b](https://github.com/googleapis/nodejs-pubsub/commit/093c46bd0a4713ad9702bde03eaa5e8b0acedb28))

## [4.0.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.7.3...v4.0.0) (2023-08-03)


### ⚠ BREAKING CHANGES

* node 12 eos ([#1774](https://github.com/googleapis/nodejs-pubsub/issues/1774)) (#1784)

### Features

* Node 12 eos ([#1774](https://github.com/googleapis/nodejs-pubsub/issues/1774)) ([#1784](https://github.com/googleapis/nodejs-pubsub/issues/1784)) ([47b83c1](https://github.com/googleapis/nodejs-pubsub/commit/47b83c18c543a7c8763256f79927a7340db56568))


### Bug Fixes

* Fix typings for IAM methods ([#1785](https://github.com/googleapis/nodejs-pubsub/issues/1785)) ([9a6bdbc](https://github.com/googleapis/nodejs-pubsub/commit/9a6bdbce952c81cb1a43fecbce16a3e3ab0f1420))

## [3.7.3](https://github.com/googleapis/nodejs-pubsub/compare/v3.7.2...v3.7.3) (2023-07-26)


### Bug Fixes

* Update masks for topic should be snake case ([#1778](https://github.com/googleapis/nodejs-pubsub/issues/1778)) ([ba72638](https://github.com/googleapis/nodejs-pubsub/commit/ba7263836e6951454f77f631c9d2eb0a4df98da5))

## [3.7.2](https://github.com/googleapis/nodejs-pubsub/compare/v3.7.1...v3.7.2) (2023-07-24)


### Bug Fixes

* Update to gax 3.6.1 for vuln fix ([#1775](https://github.com/googleapis/nodejs-pubsub/issues/1775)) ([98460db](https://github.com/googleapis/nodejs-pubsub/commit/98460dbd1f31e4ee06356e88fec676a04a68ac88))

## [3.7.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.7.0...v3.7.1) (2023-06-08)


### Bug Fixes

* Don't crash if an already-drained/removed queue gets flushed again ([#1747](https://github.com/googleapis/nodejs-pubsub/issues/1747)) ([52ea441](https://github.com/googleapis/nodejs-pubsub/commit/52ea441fee302aa6c400b58d4ecebbc96a2ea5ea))

## [3.7.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.6.0...v3.7.0) (2023-05-26)


### Features

* Add push config wrapper fields ([#1730](https://github.com/googleapis/nodejs-pubsub/issues/1730)) ([a552719](https://github.com/googleapis/nodejs-pubsub/commit/a552719dfebda4c1263c352ea99bf8f9570290b7))

## [3.6.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.5.2...v3.6.0) (2023-05-12)


### Features

* Add cloud storage subscription fields ([#1724](https://github.com/googleapis/nodejs-pubsub/issues/1724)) ([f61a64a](https://github.com/googleapis/nodejs-pubsub/commit/f61a64a2daffdfbf4c7b18d50434899c572d108c))

## [3.5.2](https://github.com/googleapis/nodejs-pubsub/compare/v3.5.1...v3.5.2) (2023-04-26)


### Bug Fixes

* Avoid zalgo when calling down to publish messages ([#1710](https://github.com/googleapis/nodejs-pubsub/issues/1710)) ([dedae1e](https://github.com/googleapis/nodejs-pubsub/commit/dedae1e46cb3214abc33578a878a2298cdae6cac))

## [3.5.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.5.0...v3.5.1) (2023-04-20)


### Bug Fixes

* Handle receipt modAck and lease extensions with exactly-once delivery correctly ([#1709](https://github.com/googleapis/nodejs-pubsub/issues/1709)) ([d786d22](https://github.com/googleapis/nodejs-pubsub/commit/d786d22bfec61b91891e5049f1b5ae2d9a81d788))

## [3.5.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.4.1...v3.5.0) (2023-04-16)


### Features

* Rework low level message stream retries, add debugging ([#1713](https://github.com/googleapis/nodejs-pubsub/issues/1713)) ([c1cc6e0](https://github.com/googleapis/nodejs-pubsub/commit/c1cc6e043ab2e532f9c8c9f9158c46e9a424d3dd))

## [3.4.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.4.0...v3.4.1) (2023-03-08)


### Bug Fixes

* Update minimum google-gax to avoid taffydb vulnerabilities ([#1695](https://github.com/googleapis/nodejs-pubsub/issues/1695)) ([11372e6](https://github.com/googleapis/nodejs-pubsub/commit/11372e6d40577704a8a22b6c010623be7e36b34a))

## [3.4.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.3.0...v3.4.0) (2023-03-06)


### Features

* Add google.api.method.signature to update methods ([1e28405](https://github.com/googleapis/nodejs-pubsub/commit/1e2840529a8451c94d5d845062da84729b7843db))
* Add temporary_failed_ack_ids to ModifyAckDeadlineConfirmation ([1e28405](https://github.com/googleapis/nodejs-pubsub/commit/1e2840529a8451c94d5d845062da84729b7843db))
* Make INTERNAL a retryable error for Pull ([#1681](https://github.com/googleapis/nodejs-pubsub/issues/1681)) ([1e28405](https://github.com/googleapis/nodejs-pubsub/commit/1e2840529a8451c94d5d845062da84729b7843db))


### Bug Fixes

* Don't do multiple drains per publish() in message queues unless requested ([#1691](https://github.com/googleapis/nodejs-pubsub/issues/1691)) ([d9b3a63](https://github.com/googleapis/nodejs-pubsub/commit/d9b3a63ddbfec0581a0e05fdbfcf9e9326b3dcf9))

## [3.3.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.2.1...v3.3.0) (2023-01-23)


### Features

* Add schema evolution methods and fields ([#1672](https://github.com/googleapis/nodejs-pubsub/issues/1672)) ([7a5bc29](https://github.com/googleapis/nodejs-pubsub/commit/7a5bc29e8a39e5c1991a5eae4200a5045f21997d))


### Bug Fixes

* Remove redundant .then() ([#1671](https://github.com/googleapis/nodejs-pubsub/issues/1671)) ([108edc3](https://github.com/googleapis/nodejs-pubsub/commit/108edc3cd2d3d512e2a9777a68541dae1f6aba23))

## [3.2.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.2.0...v3.2.1) (2022-11-04)


### Bug Fixes

* **deps:** Use google-gax v3.5.2 ([#1652](https://github.com/googleapis/nodejs-pubsub/issues/1652)) ([ee308b5](https://github.com/googleapis/nodejs-pubsub/commit/ee308b596802ad5537a89804a95429d630595eb4))

## [3.2.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.1.1...v3.2.0) (2022-09-22)


### Features

* Add support for exactly once subscriptions ([#1572](https://github.com/googleapis/nodejs-pubsub/issues/1572)) ([998de35](https://github.com/googleapis/nodejs-pubsub/commit/998de35d4bffde4fcffd217347307c04031df3e2))


### Bug Fixes

* Preserve default values in x-goog-request-params header ([#1622](https://github.com/googleapis/nodejs-pubsub/issues/1622)) ([76c0ab5](https://github.com/googleapis/nodejs-pubsub/commit/76c0ab55ecfcf0cee5fad1314ecf2317d471c13a))
* Wait for 'drain' as well ([#1636](https://github.com/googleapis/nodejs-pubsub/issues/1636)) ([d72db50](https://github.com/googleapis/nodejs-pubsub/commit/d72db503bfa3b9b6d7481ce44eb161a031f76715))

## [3.1.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.1.0...v3.1.1) (2022-09-01)


### Bug Fixes

* Add hashes to requirements.txt ([#1544](https://github.com/googleapis/nodejs-pubsub/issues/1544)) ([#1614](https://github.com/googleapis/nodejs-pubsub/issues/1614)) ([359d098](https://github.com/googleapis/nodejs-pubsub/commit/359d098b60422b37230024128ed10f04018670a0))
* Allow passing gax instance to client constructor ([#1617](https://github.com/googleapis/nodejs-pubsub/issues/1617)) ([8eabe38](https://github.com/googleapis/nodejs-pubsub/commit/8eabe3802bbc50309f3d6a0b9997752ab7f367e1))
* Better support for fallback mode ([#1610](https://github.com/googleapis/nodejs-pubsub/issues/1610)) ([d9e7311](https://github.com/googleapis/nodejs-pubsub/commit/d9e7311d6f6bb78bb3f06454a7ce3cf02fff314c))
* Change import long to require ([#1611](https://github.com/googleapis/nodejs-pubsub/issues/1611)) ([5553af2](https://github.com/googleapis/nodejs-pubsub/commit/5553af2684ba87ed361d9d79bf2e2a6d7cd3763c))
* **deps:** Update dependency protobufjs to v7 ([#1602](https://github.com/googleapis/nodejs-pubsub/issues/1602)) ([6e0ec60](https://github.com/googleapis/nodejs-pubsub/commit/6e0ec60a8f6efc7d8e7b67c431dddd7073895ae6))
* Do not import the whole google-gax from proto JS ([#1553](https://github.com/googleapis/nodejs-pubsub/issues/1553)) ([#1616](https://github.com/googleapis/nodejs-pubsub/issues/1616)) ([31c7fa2](https://github.com/googleapis/nodejs-pubsub/commit/31c7fa234ca3d0455979065199d0da1599ed216b))

## [3.1.0](https://github.com/googleapis/nodejs-pubsub/compare/v3.0.3...v3.1.0) (2022-07-15)


### Features

* add minExtension setting and plug it into EOS and ackDeadline settings ([#1582](https://github.com/googleapis/nodejs-pubsub/issues/1582)) ([8709979](https://github.com/googleapis/nodejs-pubsub/commit/87099799960b9f299d3fad609c48bd13e03c9097))

## [3.0.3](https://github.com/googleapis/nodejs-pubsub/compare/v3.0.2...v3.0.3) (2022-07-08)


### Bug Fixes

* pin @opentelemetry/semantic-conventions for Node 12 support ([#1596](https://github.com/googleapis/nodejs-pubsub/issues/1596)) ([f594061](https://github.com/googleapis/nodejs-pubsub/commit/f5940613f53c3647ab9941adfd8442f2bc0bb857))

## [3.0.2](https://github.com/googleapis/nodejs-pubsub/compare/v3.0.1...v3.0.2) (2022-06-30)


### Bug Fixes

* **deps:** update dependency @google-cloud/precise-date to v3 ([#1576](https://github.com/googleapis/nodejs-pubsub/issues/1576)) ([69a5461](https://github.com/googleapis/nodejs-pubsub/commit/69a546160284c290e7025bfe6a307d7309b828c9))
* **deps:** update dependency @google-cloud/projectify to v3 ([#1584](https://github.com/googleapis/nodejs-pubsub/issues/1584)) ([af4b13e](https://github.com/googleapis/nodejs-pubsub/commit/af4b13e162a8ad9a1c0d5c117afe784ea5824753))
* **docs:** describe fallback rest option ([#1591](https://github.com/googleapis/nodejs-pubsub/issues/1591)) ([7c08686](https://github.com/googleapis/nodejs-pubsub/commit/7c08686b4ad5a44f4b4a294c96b06e3901dd7368))

## [3.0.1](https://github.com/googleapis/nodejs-pubsub/compare/v3.0.0...v3.0.1) (2022-05-30)


### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v4 ([#1565](https://github.com/googleapis/nodejs-pubsub/issues/1565)) ([461b58b](https://github.com/googleapis/nodejs-pubsub/commit/461b58b0f4e436bf771be9655c12dd094cde60cc))
* detect subscription properties and warn for exactly-once ([#1561](https://github.com/googleapis/nodejs-pubsub/issues/1561)) ([98cf540](https://github.com/googleapis/nodejs-pubsub/commit/98cf5400ca2e67894d7cf3ed37bcdd72869e691e))

## [3.0.0](https://github.com/googleapis/nodejs-pubsub/compare/v2.19.4...v3.0.0) (2022-05-26)


### ⚠ BREAKING CHANGES

* update library to use Node 12 (#1564)

### Features

* add BigQuery configuration for subscriptions ([#1563](https://github.com/googleapis/nodejs-pubsub/issues/1563)) ([29d38a1](https://github.com/googleapis/nodejs-pubsub/commit/29d38a17663adcd02252a5b6c778d053208de12f))


### Bug Fixes

* **deps:** update dependency google-gax to v2.30.4 ([#1555](https://github.com/googleapis/nodejs-pubsub/issues/1555)) ([518fce1](https://github.com/googleapis/nodejs-pubsub/commit/518fce1adbdaae492a1d6db38daadb2be9c0a505))
* fixes for dynamic routing and streaming descriptors ([#1566](https://github.com/googleapis/nodejs-pubsub/issues/1566)) ([158c606](https://github.com/googleapis/nodejs-pubsub/commit/158c606a88077a59ac04d4abcce7c732120c4ebb))


### Build System

* update library to use Node 12 ([#1564](https://github.com/googleapis/nodejs-pubsub/issues/1564)) ([adb4319](https://github.com/googleapis/nodejs-pubsub/commit/adb43190247a6282fc2abdcf75d7b07fe3fdc1dc))

### [2.19.4](https://github.com/googleapis/nodejs-pubsub/compare/v2.19.3...v2.19.4) (2022-05-05)


### Bug Fixes

* **deps:** update dependency google-gax to v2.30.3 ([#1549](https://github.com/googleapis/nodejs-pubsub/issues/1549)) ([5810331](https://github.com/googleapis/nodejs-pubsub/commit/581033199dfe2a80a83b472bc77b1d7eab53b62d))

### [2.19.3](https://github.com/googleapis/nodejs-pubsub/compare/v2.19.2...v2.19.3) (2022-04-26)


### Bug Fixes

* **deps:** update dependency google-gax to v2.30.2 ([#1502](https://github.com/googleapis/nodejs-pubsub/issues/1502)) ([37d075e](https://github.com/googleapis/nodejs-pubsub/commit/37d075e6ae4e588155a9f0c0506b9a497be6bf06))

### [2.19.2](https://github.com/googleapis/nodejs-pubsub/compare/v2.19.1...v2.19.2) (2022-04-21)


### Bug Fixes

* fix flaky schema and subscription tests ([#1518](https://github.com/googleapis/nodejs-pubsub/issues/1518)) ([5ff0105](https://github.com/googleapis/nodejs-pubsub/commit/5ff0105cf84751beb6f06343aaf5228157faae4d))

### [2.19.1](https://github.com/googleapis/nodejs-pubsub/compare/v2.19.0...v2.19.1) (2022-04-06)


### Bug Fixes

* **deps:** update dependency google-gax to v2.29.7 ([#1493](https://github.com/googleapis/nodejs-pubsub/issues/1493)) ([c8921a7](https://github.com/googleapis/nodejs-pubsub/commit/c8921a7af9205c15c5485f3a3d1c607483a69de4))
* **deps:** update dependency google-gax to v2.30.0 ([#1496](https://github.com/googleapis/nodejs-pubsub/issues/1496)) ([073a1b8](https://github.com/googleapis/nodejs-pubsub/commit/073a1b86ab516ad78985ce3d09ff16cbdf56151e))
* update grpc.max_metadata_size to 4MiB for exactly-once, and shift ack/modack errors to 'debug' stream channel ([#1505](https://github.com/googleapis/nodejs-pubsub/issues/1505)) ([abd10cc](https://github.com/googleapis/nodejs-pubsub/commit/abd10cc0c9956256bd06e5b48a412ec0af6dd086))

## [2.19.0](https://github.com/googleapis/nodejs-pubsub/compare/v2.18.5...v2.19.0) (2022-02-16)


### Features

* add exactly once delivery flag ([#1487](https://github.com/googleapis/nodejs-pubsub/issues/1487)) ([330061c](https://github.com/googleapis/nodejs-pubsub/commit/330061c71e26753b86c637a525742b4f5cb3f02c))


### Bug Fixes

* **deps:** update dependency google-gax to v2.29.5 ([#1474](https://github.com/googleapis/nodejs-pubsub/issues/1474)) ([f855db3](https://github.com/googleapis/nodejs-pubsub/commit/f855db312bcc0e9e885fa391f42b2509ceffc13f))
* **deps:** update dependency google-gax to v2.29.6 ([#1489](https://github.com/googleapis/nodejs-pubsub/issues/1489)) ([62aba28](https://github.com/googleapis/nodejs-pubsub/commit/62aba28ddb191091bc80e9a244b561cedc92f4fe))
* removing misspelled field, add correctly spelled field 🦉 Updates from OwlBot ([#1490](https://github.com/googleapis/nodejs-pubsub/issues/1490)) ([afb9cfe](https://github.com/googleapis/nodejs-pubsub/commit/afb9cfec83524c84d8e207e2b6298996df282a66))

### [2.18.5](https://github.com/googleapis/nodejs-pubsub/compare/v2.18.4...v2.18.5) (2022-01-21)


### Bug Fixes

* **deps:** update dependency @opentelemetry/semantic-conventions to v1 ([#1407](https://github.com/googleapis/nodejs-pubsub/issues/1407)) ([740d78c](https://github.com/googleapis/nodejs-pubsub/commit/740d78cb285a136a39d7324c9f0e2e0d7fc1f06d))
* **deps:** update dependency google-gax to v2.29.0 ([#1452](https://github.com/googleapis/nodejs-pubsub/issues/1452)) ([f419137](https://github.com/googleapis/nodejs-pubsub/commit/f4191372eabc134454db7d24cb38a29597b153dd))
* **deps:** update dependency google-gax to v2.29.4 ([#1469](https://github.com/googleapis/nodejs-pubsub/issues/1469)) ([8abbfa7](https://github.com/googleapis/nodejs-pubsub/commit/8abbfa77ce9c6e6decbd79c29bcaad8e5e3e1ed6))
* update to work with latest node types (changed the return type of Stream.destroy()) ([#1464](https://github.com/googleapis/nodejs-pubsub/issues/1464)) ([fddc2e7](https://github.com/googleapis/nodejs-pubsub/commit/fddc2e77ed54c1762afb533965da2e0658b58de6))

### [2.18.4](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.18.3...v2.18.4) (2021-12-09)


### Bug Fixes

* **deps:** update dependency google-gax to v2.28.1 ([#1432](https://www.github.com/googleapis/nodejs-pubsub/issues/1432)) ([98840fc](https://www.github.com/googleapis/nodejs-pubsub/commit/98840fcc38a05be07de6e7dc97d8a79616940df9))

### [2.18.3](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.18.2...v2.18.3) (2021-11-18)


### Bug Fixes

* set only Publish to 5000ms ([#1416](https://www.github.com/googleapis/nodejs-pubsub/issues/1416)) ([1e11001](https://www.github.com/googleapis/nodejs-pubsub/commit/1e110016ea04fc41d2fa80d64a54a11fd4078c60))
* temporary hold-back on google-gax to avoid timeout issues caused by https://github.com/googleapis/gax-nodejs/pull/1100 ([#1431](https://www.github.com/googleapis/nodejs-pubsub/issues/1431)) ([18c6b18](https://www.github.com/googleapis/nodejs-pubsub/commit/18c6b18f621c410aca968a6bfc850e7a6ea404f4))

### [2.18.2](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.18.1...v2.18.2) (2021-11-08)


### Bug Fixes

* **cloud-rad:** move comments for TSDoc ([#1423](https://www.github.com/googleapis/nodejs-pubsub/issues/1423)) ([a40a23e](https://www.github.com/googleapis/nodejs-pubsub/commit/a40a23ee43c6697000996e0ff7070f41610397f5))

### [2.18.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.18.0...v2.18.1) (2021-09-27)


### Bug Fixes

* deprecate maxExtension in favour of maxExtensionMinutes ([#1402](https://www.github.com/googleapis/nodejs-pubsub/issues/1402)) ([46b83ba](https://www.github.com/googleapis/nodejs-pubsub/commit/46b83ba14e954cc6bec3f03ca7c3e0bcdfb7597c))

## [2.18.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.17.0...v2.18.0) (2021-09-23)


### Features

* add publisher side flow control ([#1359](https://www.github.com/googleapis/nodejs-pubsub/issues/1359)) ([cc0f61b](https://www.github.com/googleapis/nodejs-pubsub/commit/cc0f61b18258bae0be1a5962a93970cc15dcd304))


### Bug Fixes

* update default RPC retry timeouts to match other languages ([#1399](https://www.github.com/googleapis/nodejs-pubsub/issues/1399)) ([8c1afee](https://www.github.com/googleapis/nodejs-pubsub/commit/8c1afeee26fbff84448b1a9576e4c4ef5c67f9cc))

## [2.17.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.6...v2.17.0) (2021-08-25)


### Features

* turns on self-signed JWT feature flag ([#1382](https://www.github.com/googleapis/nodejs-pubsub/issues/1382)) ([e8b4922](https://www.github.com/googleapis/nodejs-pubsub/commit/e8b49228cffd8016be12ab607363136c2f27c593))


### Bug Fixes

* **build:** move branch references to main ([#1174](https://www.github.com/googleapis/nodejs-pubsub/issues/1174)) ([#1386](https://www.github.com/googleapis/nodejs-pubsub/issues/1386)) ([16b710a](https://www.github.com/googleapis/nodejs-pubsub/commit/16b710aae29575b9108215479080a8d6c3dad654))

### [2.16.6](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.5...v2.16.6) (2021-08-19)


### Bug Fixes

* don't require a `data` attribute to be passed when sending a message ([#1370](https://www.github.com/googleapis/nodejs-pubsub/issues/1370)) ([97fd4f0](https://www.github.com/googleapis/nodejs-pubsub/commit/97fd4f041c195e0388b0613b2cf9710b89ab4e15))

### [2.16.5](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.4...v2.16.5) (2021-08-18)


### Bug Fixes

* export publish and subscribe options ([#1371](https://www.github.com/googleapis/nodejs-pubsub/issues/1371)) ([c37e0fd](https://www.github.com/googleapis/nodejs-pubsub/commit/c37e0fd5ee8864597241623e19ec495b5b99d5c3))

### [2.16.4](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.3...v2.16.4) (2021-08-17)


### Bug Fixes

* **deps:** google-gax v2.24.1 ([#1377](https://www.github.com/googleapis/nodejs-pubsub/issues/1377)) ([16a1eff](https://www.github.com/googleapis/nodejs-pubsub/commit/16a1eff34897567efa5f2116562e36325edce019))

### [2.16.3](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.2...v2.16.3) (2021-08-11)


### Bug Fixes

* **pubsub:** replace IAMPolicy in API config ([#1373](https://www.github.com/googleapis/nodejs-pubsub/issues/1373)) ([435a181](https://www.github.com/googleapis/nodejs-pubsub/commit/435a18110fdefb6964b331047a9ac536d758d1d3))

### [2.16.2](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.1...v2.16.2) (2021-08-11)


### Bug Fixes

* **deps:** update opentelemetry monorepo to ^0.24.0 ([#1349](https://www.github.com/googleapis/nodejs-pubsub/issues/1349)) ([cf0d24a](https://www.github.com/googleapis/nodejs-pubsub/commit/cf0d24a9ff090f6f3f235d8d474d75cd9599c49e))

### [2.16.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.16.0...v2.16.1) (2021-07-21)


### Bug Fixes

* Updating WORKSPACE files to use the newest version of the Typescript generator. ([#1354](https://www.github.com/googleapis/nodejs-pubsub/issues/1354)) ([7288e2e](https://www.github.com/googleapis/nodejs-pubsub/commit/7288e2e06b15bede3e06002a8a3dec2699312aa2))

## [2.16.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.15.1...v2.16.0) (2021-07-12)


### Features

* Add method signature for Subscriber.Pull without the deprecated return_immediately field. ([#1350](https://www.github.com/googleapis/nodejs-pubsub/issues/1350)) ([a7922fb](https://www.github.com/googleapis/nodejs-pubsub/commit/a7922fb345337d750789d1b672521c8440472cea))


### Bug Fixes

* **deps:** google-gax v2.17.0 with mTLS ([#1344](https://www.github.com/googleapis/nodejs-pubsub/issues/1344)) ([0cd0a8c](https://www.github.com/googleapis/nodejs-pubsub/commit/0cd0a8c8c79e3ca7dfe1e2d1bf2a2f8894ba4680))
* **deps:** google-gax v2.17.1 ([#1353](https://www.github.com/googleapis/nodejs-pubsub/issues/1353)) ([d5bf563](https://www.github.com/googleapis/nodejs-pubsub/commit/d5bf56325374c5509c6b65c953b41c15533a2a0a))

### [2.15.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.15.0...v2.15.1) (2021-06-22)


### Bug Fixes

* make request optional in all cases ([#1328](https://www.github.com/googleapis/nodejs-pubsub/issues/1328)) ([fa74fa1](https://www.github.com/googleapis/nodejs-pubsub/commit/fa74fa16c76f6b25ee1648ee51c397ccf01f71a4))

## [2.15.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.14.0...v2.15.0) (2021-06-22)


### Features

* upgrade the opentelemetry api to 1.0.0 ([#1329](https://www.github.com/googleapis/nodejs-pubsub/issues/1329)) ([6896ad9](https://www.github.com/googleapis/nodejs-pubsub/commit/6896ad9d73c6d481c02af503b0e9e5a211bdbdf1))


### Bug Fixes

* **deps:** update opentelemetry monorepo to ^0.21.0 ([#1324](https://www.github.com/googleapis/nodejs-pubsub/issues/1324)) ([c6d1750](https://www.github.com/googleapis/nodejs-pubsub/commit/c6d1750de45bbad0f599d328c37085f1f4246f9b))

## [2.14.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.13.0...v2.14.0) (2021-06-11)


### Features

* upgrade @opentelemetry/api to version 0.20.0 ([#1305](https://www.github.com/googleapis/nodejs-pubsub/issues/1305)) ([ed32369](https://www.github.com/googleapis/nodejs-pubsub/commit/ed32369ab4ccee5a8919f7353ed9eed7f3c1f6d8))

## [2.13.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.12.0...v2.13.0) (2021-06-10)


### Features

* expose list/get options for full/basic on schema methods ([#1291](https://www.github.com/googleapis/nodejs-pubsub/issues/1291)) ([11f9612](https://www.github.com/googleapis/nodejs-pubsub/commit/11f961268429bb691be226aaffae6a88eeb9c600))
* schema library support ([#1289](https://www.github.com/googleapis/nodejs-pubsub/issues/1289)) ([fd275e2](https://www.github.com/googleapis/nodejs-pubsub/commit/fd275e23fec89e6368a47caa1fdc194cbfc5d32b))


### Bug Fixes

* GoogleAdsError missing using generator version after 1.3.0 ([#1299](https://www.github.com/googleapis/nodejs-pubsub/issues/1299)) ([43a8fdb](https://www.github.com/googleapis/nodejs-pubsub/commit/43a8fdbbe2db24556101fb4e0bb29b3d95112ba0))

## [2.12.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.11.0...v2.12.0) (2021-05-11)


### Features

* update publisher options all the way through the topic object tree ([#1279](https://www.github.com/googleapis/nodejs-pubsub/issues/1279)) ([70402ac](https://www.github.com/googleapis/nodejs-pubsub/commit/70402ac0f6dc905febecae8f4d3dfa8cc93e7c08))


### Bug Fixes

* **deps:** require google-gax v2.12.0 ([#1282](https://www.github.com/googleapis/nodejs-pubsub/issues/1282)) ([3dee854](https://www.github.com/googleapis/nodejs-pubsub/commit/3dee8548c2111f512b3afc2ffa3041934fee76ff))
* use require to load proto JSON ([#1283](https://www.github.com/googleapis/nodejs-pubsub/issues/1283)) ([201a56c](https://www.github.com/googleapis/nodejs-pubsub/commit/201a56c4c7c7115cd3a7c8cff864d83223082d12))

## [2.11.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.10.0...v2.11.0) (2021-04-14)


### ⚠ BREAKING CHANGES

* `fix: added support for Opentelemetry 0.18` - makes significant changes to OpenTelemetry support in order to unblock its usage again; the main user-visible change is that you will need to use 0.18+ versions of OpenTelemetry, and different items are passed to the server in spans.

### Bug Fixes

* added support for Opentelemetry 0.18 ([#1234](https://www.github.com/googleapis/nodejs-pubsub/issues/1234)) ([aedc36c](https://www.github.com/googleapis/nodejs-pubsub/commit/aedc36c3f8736eff1cb781b9e05457463481b3d6))
* follow-on proto updates from the removal of the common protos ([#1229](https://www.github.com/googleapis/nodejs-pubsub/issues/1229)) ([cb627d5](https://www.github.com/googleapis/nodejs-pubsub/commit/cb627d5555c617eb025181c9f9aaf1d2c9621a86))
* prevent attempt to publish 0 messages ([#1218](https://www.github.com/googleapis/nodejs-pubsub/issues/1218)) ([96e6535](https://www.github.com/googleapis/nodejs-pubsub/commit/96e653514b35d61f74ba2d5d6fa96e19bc45bf8c))
* remove common protos ([#1232](https://www.github.com/googleapis/nodejs-pubsub/issues/1232)) ([8838288](https://www.github.com/googleapis/nodejs-pubsub/commit/883828800c94f7ea21c8306d272b70b4576c664c))
* reverting the major from the OpenTelemetry change (it was already broken) ([#1257](https://www.github.com/googleapis/nodejs-pubsub/issues/1257)) ([09c428a](https://www.github.com/googleapis/nodejs-pubsub/commit/09c428a17eb20fcd0fc45301addb48d2bebc56a3))
* temporarily pin sinon at 10.0.0 ([#1252](https://www.github.com/googleapis/nodejs-pubsub/issues/1252)) ([0922164](https://www.github.com/googleapis/nodejs-pubsub/commit/09221643be0693463ed4e5d56efd0f1ebfbe78b7))

## [2.10.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.9.0...v2.10.0) (2021-02-22)


### Features

* export PublishError ([#1216](https://www.github.com/googleapis/nodejs-pubsub/issues/1216)) ([7c75d70](https://www.github.com/googleapis/nodejs-pubsub/commit/7c75d70e12545859d011c289b251d2ef746de589)), closes [#1215](https://www.github.com/googleapis/nodejs-pubsub/issues/1215)

## [2.9.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.8.0...v2.9.0) (2021-02-10)


### Features

* update protos from upstream ([#1206](https://www.github.com/googleapis/nodejs-pubsub/issues/1206)) ([33526b0](https://www.github.com/googleapis/nodejs-pubsub/commit/33526b04373bd1ea40930d14b6fc6a344a814eff))


### Bug Fixes

* bind promisify calls for flush() so they have a 'this' value ([#1184](https://www.github.com/googleapis/nodejs-pubsub/issues/1184)) ([e494fb7](https://www.github.com/googleapis/nodejs-pubsub/commit/e494fb7303ae58b08f3f75aa87ea1f10c86f648e))
* **deps:** update dependency google-auth-library to v7 ([#1207](https://www.github.com/googleapis/nodejs-pubsub/issues/1207)) ([fce2af1](https://www.github.com/googleapis/nodejs-pubsub/commit/fce2af18ef932b722dcaa9e1132ee145318bd81e))
* openTelemetry doc fails to generate for [#1185](https://www.github.com/googleapis/nodejs-pubsub/issues/1185) ([#1200](https://www.github.com/googleapis/nodejs-pubsub/issues/1200)) ([0600bde](https://www.github.com/googleapis/nodejs-pubsub/commit/0600bdef9447440605d129396c1915e7640f80ea))
* update synchronousPull example to avoid INVALID_ARGUMENT error ([#1194](https://www.github.com/googleapis/nodejs-pubsub/issues/1194)) ([1f85345](https://www.github.com/googleapis/nodejs-pubsub/commit/1f853450e0822ebbaeab5892f5d76f5bc0e29537))

## [2.8.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.7.0...v2.8.0) (2021-01-08)


### Features

* schema proto support ([#1176](https://www.github.com/googleapis/nodejs-pubsub/issues/1176)) ([ac29561](https://www.github.com/googleapis/nodejs-pubsub/commit/ac2956123b361892290ece66ab9a9dfaa7f61d2d))


### Bug Fixes

* **deps:** update opentelemetry monorepo to ^0.12.0 ([#1162](https://www.github.com/googleapis/nodejs-pubsub/issues/1162)) ([f459a91](https://www.github.com/googleapis/nodejs-pubsub/commit/f459a91949fca1fbd573ecc1442bc3e5f54e8ee8))

## [2.7.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.6.0...v2.7.0) (2020-11-30)


### Features

* Enable server side flow control by default with the option to turn it off ([#1147](https://www.github.com/googleapis/nodejs-pubsub/issues/1147)) ([a9c7e0b](https://www.github.com/googleapis/nodejs-pubsub/commit/a9c7e0b216a0c228793eeead150cc21b16bd2dcb))
* update generator to a new version ([#1157](https://www.github.com/googleapis/nodejs-pubsub/issues/1157)) ([3b1e99e](https://www.github.com/googleapis/nodejs-pubsub/commit/3b1e99ebde72653a1fa0317820d1218e1c04eb8f))


### Bug Fixes

* do not modify options object, use defaultScopes ([#1148](https://www.github.com/googleapis/nodejs-pubsub/issues/1148)) ([4745c10](https://www.github.com/googleapis/nodejs-pubsub/commit/4745c10eb062b1816516ce79cec496b388e48b2b))
* node 14+ changes how multiple destroy() calls work ([#1153](https://www.github.com/googleapis/nodejs-pubsub/issues/1153)) ([e421749](https://www.github.com/googleapis/nodejs-pubsub/commit/e42174987ec4669b31882943606c871c9b6c08d7))

## [2.6.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.5.0...v2.6.0) (2020-10-20)


### Features

* update synthtool generation for latest changes ([#1128](https://www.github.com/googleapis/nodejs-pubsub/issues/1128)) ([bdbe80f](https://www.github.com/googleapis/nodejs-pubsub/commit/bdbe80f9183fae77dd8ac3e7ffa4bbc5282b030c))


### Bug Fixes

* **deps:** update google-auth-library for security fix ([#1122](https://www.github.com/googleapis/nodejs-pubsub/issues/1122)) ([1eaf850](https://github.com/googleapis/nodejs-pubsub/commit/1eaf850bf4ea44ae3269d4f33d5aa6574af76705))
* add CANCELLED back to the auto-retry codes for pull subscriptions, for now ([#1132](https://www.github.com/googleapis/nodejs-pubsub/issues/1132)) ([47cd89c](https://www.github.com/googleapis/nodejs-pubsub/commit/47cd89c99cad62e603f4c5345ce2857c6abf6f47))
* **deps:** update opentelemetry monorepo to ^0.11.0 ([#1102](https://www.github.com/googleapis/nodejs-pubsub/issues/1102)) ([c9d5638](https://www.github.com/googleapis/nodejs-pubsub/commit/c9d5638031d047b80df82bc4afed1aecdd708406))
* **deps:** upgrade google-auth-library ([#1122](https://www.github.com/googleapis/nodejs-pubsub/issues/1122)) ([54310a7](https://www.github.com/googleapis/nodejs-pubsub/commit/54310a771b4b39c896f62fc18aea040cc42bfcd7))
* move system and samples test from Node 10 to Node 12 ([#1094](https://www.github.com/googleapis/nodejs-pubsub/issues/1094)) ([693116a](https://www.github.com/googleapis/nodejs-pubsub/commit/693116afb3776a8696c52d890edf9a57423896dc))

## [2.5.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.4.0...v2.5.0) (2020-08-17)


### Features

* Opentelemetry integration ([#1078](https://www.github.com/googleapis/nodejs-pubsub/issues/1078)) ([76db007](https://www.github.com/googleapis/nodejs-pubsub/commit/76db007f270a646e8570768fa827ea2a97b62cbc)), closes [#1066](https://www.github.com/googleapis/nodejs-pubsub/issues/1066) [#1070](https://www.github.com/googleapis/nodejs-pubsub/issues/1070)


### Bug Fixes

* make request batching work again ([#1087](https://www.github.com/googleapis/nodejs-pubsub/issues/1087)) ([80e0ee3](https://www.github.com/googleapis/nodejs-pubsub/commit/80e0ee3a4ef0da325e61ce2b869f4c0f9829b136))
* properly handle non-emulator alternate endpoints for pub/sub ([#1060](https://www.github.com/googleapis/nodejs-pubsub/issues/1060)) ([195ebf6](https://www.github.com/googleapis/nodejs-pubsub/commit/195ebf648e00ba35f567cef06a06c31f3f9c57d9))
* **deps:** update opentelemetry monorepo to ^0.10.0 ([#1090](https://www.github.com/googleapis/nodejs-pubsub/issues/1090)) ([78a45ff](https://www.github.com/googleapis/nodejs-pubsub/commit/78a45ff1cb8fb921e5ca05e435554d684a777185))
* update minimum gax version to 2.7.0 to fix recent protobuf errors ([#1085](https://www.github.com/googleapis/nodejs-pubsub/issues/1085)) ([904348c](https://www.github.com/googleapis/nodejs-pubsub/commit/904348cd6471f267a54635fcd65fe4191896308e))

## [2.4.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.3.0...v2.4.0) (2020-08-08)


### Features

* update to TypeScript 3.8+ to match gax/protobufjs (to allow things to compile again) ([#1079](https://www.github.com/googleapis/nodejs-pubsub/issues/1079)) ([cd39d38](https://www.github.com/googleapis/nodejs-pubsub/commit/cd39d38c525b3ed0383c63eb379c96aed6f53d94))

## [2.3.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.2.0...v2.3.0) (2020-07-20)


### Features

* Add support for server-side flow control ([#1041](https://www.github.com/googleapis/nodejs-pubsub/issues/1041)) ([a53f6c7](https://www.github.com/googleapis/nodejs-pubsub/commit/a53f6c755317f2fdcb107989321a78fa05e0c455))
* support for detaching subscriptions ([#1032](https://www.github.com/googleapis/nodejs-pubsub/issues/1032)) ([c5af3a9](https://www.github.com/googleapis/nodejs-pubsub/commit/c5af3a9988e318c3d884aed1777010faa8545ab1))


### Bug Fixes

* typeo in nodejs .gitattribute ([#1049](https://www.github.com/googleapis/nodejs-pubsub/issues/1049)) ([b4c6dc0](https://www.github.com/googleapis/nodejs-pubsub/commit/b4c6dc0264a4f62283ceb3b5e1e2ae58e06c56c1))

## [2.2.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.1.0...v2.2.0) (2020-07-09)


### Features

* add flow control settings for StreamingPullRequest to pubsub.proto ([#1035](https://www.github.com/googleapis/nodejs-pubsub/issues/1035)) ([a7dff65](https://www.github.com/googleapis/nodejs-pubsub/commit/a7dff65c1a4115e75251b775f679e6beb092928e))
* move ts target to es2018 from es2016 ([#1022](https://www.github.com/googleapis/nodejs-pubsub/issues/1022)) ([016568d](https://www.github.com/googleapis/nodejs-pubsub/commit/016568df466c2a543762ab4f194b785a426ad880))
* Re-export ClientConfig from pubsub.ts in package index.ts ([#1038](https://www.github.com/googleapis/nodejs-pubsub/issues/1038)) ([c2ac083](https://www.github.com/googleapis/nodejs-pubsub/commit/c2ac083fdb5f3b71dcb3be482b8ee5c9d527342d)), closes [#972](https://www.github.com/googleapis/nodejs-pubsub/issues/972)


### Bug Fixes

* handle fallback option properly ([#1028](https://www.github.com/googleapis/nodejs-pubsub/issues/1028)) ([5dc1827](https://www.github.com/googleapis/nodejs-pubsub/commit/5dc18270220dbf39f5a871716b4dd9d002d0c536))
* update node issue template ([#1033](https://www.github.com/googleapis/nodejs-pubsub/issues/1033)) ([52ba0ae](https://www.github.com/googleapis/nodejs-pubsub/commit/52ba0ae0218c0859a03d8ad9e4f27130ceb4cc61))

## [2.1.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v2.0.0...v2.1.0) (2020-06-02)


### Features

* re-generated to pick up changes from googleapis ([#1014](https://www.github.com/googleapis/nodejs-pubsub/issues/1014)) ([1ad3552](https://www.github.com/googleapis/nodejs-pubsub/commit/1ad35528f0d8b5420f9fbe122db2ff1962e32acb))


### Bug Fixes

* use any to unblock typescript compilation bug ([#1012](https://www.github.com/googleapis/nodejs-pubsub/issues/1012)) ([1e8ced3](https://www.github.com/googleapis/nodejs-pubsub/commit/1e8ced3f06d12487fdf00b443bb447e1ec1a911b))

## [2.0.0](https://www.github.com/googleapis/nodejs-pubsub/compare/vv1.7.1...v2.0.0) (2020-05-20)

Please note that Node 8 is no longer supported, and Node 10 is the new minimum version of the runtime.

### ⚠ BREAKING CHANGES

* Please note that Node 8 is no longer supported, and Node 10 is the new minimum version of the runtime.
* drop support for custom promises (#970)
* convert to typescript (#923)
* **deps:** update dependency @google-cloud/projectify to v2 (#929)

### Bug Fixes

* **docs:** link to correct gaxOptions docs ([#999](https://www.github.com/googleapis/nodejs-pubsub/issues/999)) ([312e318](https://www.github.com/googleapis/nodejs-pubsub/commit/312e318ceb36eafbeb487ede7e5dbf9ccd5dfb81))
* regen protos and tests, formatting ([#991](https://www.github.com/googleapis/nodejs-pubsub/issues/991)) ([e350b97](https://www.github.com/googleapis/nodejs-pubsub/commit/e350b97ad19e49e5fe52d5eeb1ad67c8bb6ddf33))
* remove eslint, update gax, fix generated protos, run the generator ([#955](https://www.github.com/googleapis/nodejs-pubsub/issues/955)) ([544a061](https://www.github.com/googleapis/nodejs-pubsub/commit/544a061b1b6d7fdc4051486c2b8ae5d14e1ec141))
* remove unused dependencies ([#998](https://www.github.com/googleapis/nodejs-pubsub/issues/998)) ([7b242a3](https://www.github.com/googleapis/nodejs-pubsub/commit/7b242a36212e0871b3918621fe9a5f51d1e6b733))
* **close:** ensure in-flight messages are drained ([#952](https://www.github.com/googleapis/nodejs-pubsub/issues/952)) ([93a2bd7](https://www.github.com/googleapis/nodejs-pubsub/commit/93a2bd726660b134fbd3e12335bfde29d13a2b78))
* **deps:** update dependency @google-cloud/paginator to v3 ([#931](https://www.github.com/googleapis/nodejs-pubsub/issues/931)) ([b621854](https://www.github.com/googleapis/nodejs-pubsub/commit/b62185426b7f958ee41a1cff429bc5fb70635b4a))
* **deps:** update dependency @google-cloud/precise-date to v2 ([#934](https://www.github.com/googleapis/nodejs-pubsub/issues/934)) ([72b8d78](https://www.github.com/googleapis/nodejs-pubsub/commit/72b8d781ed3cbf9049101b9c2675f211fb3924ba))
* **deps:** update dependency @google-cloud/projectify to v2 ([#929](https://www.github.com/googleapis/nodejs-pubsub/issues/929)) ([45d9880](https://www.github.com/googleapis/nodejs-pubsub/commit/45d988077d2db2fddbb4d22aac43c7f8a77e4dcc))
* **deps:** update dependency @google-cloud/promisify to v2 ([#928](https://www.github.com/googleapis/nodejs-pubsub/issues/928)) ([3819877](https://www.github.com/googleapis/nodejs-pubsub/commit/3819877752d39cd042364bdd9ed01ff230aeed0b))
* **deps:** update dependency google-auth-library to v6 ([#935](https://www.github.com/googleapis/nodejs-pubsub/issues/935)) ([73fc887](https://www.github.com/googleapis/nodejs-pubsub/commit/73fc887c662b526690167286d2d5afda0cccad1b))


### Build System

* convert to typescript ([#923](https://www.github.com/googleapis/nodejs-pubsub/issues/923)) ([2fc68ba](https://www.github.com/googleapis/nodejs-pubsub/commit/2fc68baff0cc2013468da7ef3dc8d547d4745989))


### Miscellaneous Chores

* drop support for custom promises ([#970](https://www.github.com/googleapis/nodejs-pubsub/issues/970)) ([df462d3](https://www.github.com/googleapis/nodejs-pubsub/commit/df462d3dec4f733cb309eb6413aad382424e2125))

### [1.7.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.7.0...v1.7.1) (2020-04-06)


### Bug Fixes

* provide missing close() method in the generated gapic client ([#941](https://www.github.com/googleapis/nodejs-pubsub/issues/941)) ([6bf8f14](https://www.github.com/googleapis/nodejs-pubsub/commit/6bf8f1481a1dea051c47697488e13b6facf20a26))

## [1.7.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.6.0...v1.7.0) (2020-03-29)


### Features

* add a close() method to PubSub, and a flush() method to Topic/Publisher ([#916](https://www.github.com/googleapis/nodejs-pubsub/issues/916)) ([4097995](https://www.github.com/googleapis/nodejs-pubsub/commit/4097995a85a8ca3fb73c2c2a8cb0649cdd4274be))

## [1.6.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.5.0...v1.6.0) (2020-03-04)


### Features

* **subscription:** support oidcToken ([#865](https://www.github.com/googleapis/nodejs-pubsub/issues/865)) ([a786ca0](https://www.github.com/googleapis/nodejs-pubsub/commit/a786ca00bd27a6e098125d6b7b87edb11ea6ea0f))
* export protos in src/index.ts ([f32910c](https://www.github.com/googleapis/nodejs-pubsub/commit/f32910c3a7da5ce268084d7294094912ab696034))


### Bug Fixes

* **deps:** update to the latest google-gax to pull in grpc-js 0.6.18 ([#903](https://www.github.com/googleapis/nodejs-pubsub/issues/903)) ([78bd9e9](https://www.github.com/googleapis/nodejs-pubsub/commit/78bd9e97a913b5e2aa457c2a28fd849f67bf225e))
* send the ITimestamp protobuf to Pub/Sub for seeking, not JavaScript Date() ([#908](https://www.github.com/googleapis/nodejs-pubsub/issues/908)) ([0c1d711](https://www.github.com/googleapis/nodejs-pubsub/commit/0c1d711854d7397a0fc4d6e84ed090984a6e05dc))

## [1.5.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.4.1...v1.5.0) (2020-02-03)


### Features

* added clientId to StreamingPullRequest ([b566ab3](https://www.github.com/googleapis/nodejs-pubsub/commit/b566ab3187efe08d19c29afc8a506a94ed2760b3))
* update defaults for batch settings also, and update which result codes will cause a retry ([#877](https://www.github.com/googleapis/nodejs-pubsub/issues/877)) ([32ae411](https://www.github.com/googleapis/nodejs-pubsub/commit/32ae4114fb7b42722a6c5100e9d494e470a5cae2))

### [1.4.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.4.0...v1.4.1) (2020-01-28)


### Bug Fixes

* enum, bytes, and Long types now accept strings ([186778f](https://www.github.com/googleapis/nodejs-pubsub/commit/186778f627e0252f25508a80165f253b9dedcb83))

## [1.4.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.3.0...v1.4.0) (2020-01-24)


### Features

* **defaults:** update defaults for the node client library to match other pub/sub libraries ([#859](https://www.github.com/googleapis/nodejs-pubsub/issues/859)) ([8d6c3f7](https://www.github.com/googleapis/nodejs-pubsub/commit/8d6c3f778cbe00cde8b273b25bc50b491687396b))

## [1.3.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.2.0...v1.3.0) (2020-01-14)


### Features

* **subscription:** dead letter policy support ([#799](https://www.github.com/googleapis/nodejs-pubsub/issues/799)) ([b5a4195](https://www.github.com/googleapis/nodejs-pubsub/commit/b5a4195238cf8ceed0b066a93066765820dc0488))

## [1.2.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.6...v1.2.0) (2019-12-13)


### Features

* ordered messaging ([#716](https://www.github.com/googleapis/nodejs-pubsub/issues/716)) ([b2f96ff](https://www.github.com/googleapis/nodejs-pubsub/commit/b2f96ffe6c1db93741f40804786f8c294717676b))

### [1.1.6](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.5...v1.1.6) (2019-11-25)


### Bug Fixes

* **deps:** update dependency yargs to v15 ([#820](https://www.github.com/googleapis/nodejs-pubsub/issues/820)) ([3615211](https://www.github.com/googleapis/nodejs-pubsub/commit/36152114829c384a97b4f19b9006704a0f216878))
* **docs:** snippets are now replaced in jsdoc comments ([#815](https://www.github.com/googleapis/nodejs-pubsub/issues/815)) ([b0b26ad](https://www.github.com/googleapis/nodejs-pubsub/commit/b0b26ade6096aa39fbc36a5c270982f3b6f9192e))
* adds streaming pull retry, and increases request thresholds ([a7d4d04](https://www.github.com/googleapis/nodejs-pubsub/commit/a7d4d04c1b728e3d29626656889da0dd747b94ce))
* include long import in proto typescript declaration file ([#816](https://www.github.com/googleapis/nodejs-pubsub/issues/816)) ([4b3b813](https://www.github.com/googleapis/nodejs-pubsub/commit/4b3b81384ad4e46f75ee23f3b174842ada212bfe))

### [1.1.5](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.4...v1.1.5) (2019-10-22)


### Bug Fixes

* pull emulator creds from local grpc instance ([#795](https://www.github.com/googleapis/nodejs-pubsub/issues/795)) ([1749b62](https://www.github.com/googleapis/nodejs-pubsub/commit/1749b626e6bff5fefd1b1b8c673c480a10be9cf9))

### [1.1.4](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.3...v1.1.4) (2019-10-22)


### Bug Fixes

* **deps:** bump google-gax to 1.7.5 ([#792](https://www.github.com/googleapis/nodejs-pubsub/issues/792)) ([d584d07](https://www.github.com/googleapis/nodejs-pubsub/commit/d584d07c8a8291444487eef947e01a832dfde372))

### [1.1.3](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.2...v1.1.3) (2019-10-18)


### Bug Fixes

* **deps:** explicit update to google-auth-library with various fixes ([#785](https://www.github.com/googleapis/nodejs-pubsub/issues/785)) ([c7b0069](https://www.github.com/googleapis/nodejs-pubsub/commit/c7b006995fb8fe432e8561d189cddbd20c8e0dce))
* **docs:** add documentation about running C++ gRPC bindings ([#782](https://www.github.com/googleapis/nodejs-pubsub/issues/782)) ([bdc690e](https://www.github.com/googleapis/nodejs-pubsub/commit/bdc690e6d102862f11a5ea4901c98effe1d3c427))

### [1.1.2](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.1...v1.1.2) (2019-10-09)


### Bug Fixes

* **deps:** remove direct dependency on @grpc/grpc-js ([#773](https://www.github.com/googleapis/nodejs-pubsub/issues/773)) ([0bebf9b](https://www.github.com/googleapis/nodejs-pubsub/commit/0bebf9b))

### [1.1.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.1.0...v1.1.1) (2019-10-08)


### Bug Fixes

* update messaging retry timeout durations ([#761](https://www.github.com/googleapis/nodejs-pubsub/issues/761)) ([922fe92](https://www.github.com/googleapis/nodejs-pubsub/commit/922fe92))
* use compatible version of google-gax ([060207a](https://www.github.com/googleapis/nodejs-pubsub/commit/060207a))
* **deps:** pin @grpc/grpc-js to ^0.6.6 ([#772](https://www.github.com/googleapis/nodejs-pubsub/issues/772)) ([3c5199d](https://www.github.com/googleapis/nodejs-pubsub/commit/3c5199d))
* **docs:** explain PubSub.v1 property ([#766](https://www.github.com/googleapis/nodejs-pubsub/issues/766)) ([157a86d](https://www.github.com/googleapis/nodejs-pubsub/commit/157a86d))

## [1.1.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v1.0.0...v1.1.0) (2019-09-25)


### Bug Fixes

* **deps:** update dependency @google-cloud/pubsub to v1 ([#750](https://www.github.com/googleapis/nodejs-pubsub/issues/750)) ([82305de](https://www.github.com/googleapis/nodejs-pubsub/commit/82305de))
* **deps:** update dependency @grpc/grpc-js to ^0.6.0 ([#759](https://www.github.com/googleapis/nodejs-pubsub/issues/759)) ([fda95c7](https://www.github.com/googleapis/nodejs-pubsub/commit/fda95c7))


### Features

* .d.ts for protos ([#755](https://www.github.com/googleapis/nodejs-pubsub/issues/755)) ([32aab9f](https://www.github.com/googleapis/nodejs-pubsub/commit/32aab9f))

## [1.0.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.32.1...v1.0.0) (2019-09-18)


### ⚠ BREAKING CHANGES

* set release level to GA (#745)

### Miscellaneous Chores

* set release level to GA ([#745](https://www.github.com/googleapis/nodejs-pubsub/issues/745)) ([2e90c5b](https://www.github.com/googleapis/nodejs-pubsub/commit/2e90c5b))

### [0.32.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.32.0...v0.32.1) (2019-09-13)

### Updates

* dependency `google-gax` updated to `^1.5.2` to make sure the new version is pulled.

## [0.32.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.31.1...v0.32.0) (2019-09-11)


### Bug Fixes

* pull projectId from auth client with emulator ([#731](https://www.github.com/googleapis/nodejs-pubsub/issues/731)) ([3840cad](https://www.github.com/googleapis/nodejs-pubsub/commit/3840cad))
* update IAM protos ([#736](https://www.github.com/googleapis/nodejs-pubsub/issues/736)) ([055fa33](https://www.github.com/googleapis/nodejs-pubsub/commit/055fa33))


### Features

* introduces DeadLetterPolicy ([e24c545](https://www.github.com/googleapis/nodejs-pubsub/commit/e24c545))
* load protos from JSON, grpc-fallback support ([#730](https://www.github.com/googleapis/nodejs-pubsub/issues/730)) ([2071954](https://www.github.com/googleapis/nodejs-pubsub/commit/2071954))
* update IAM protos ([#734](https://www.github.com/googleapis/nodejs-pubsub/issues/734)) ([91fa2ef](https://www.github.com/googleapis/nodejs-pubsub/commit/91fa2ef))

### [0.31.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.31.0...v0.31.1) (2019-08-27)


### Bug Fixes

* **deps:** update dependency yargs to v14 ([b0ceb5e](https://www.github.com/googleapis/nodejs-pubsub/commit/b0ceb5e))
* use process versions object for client header ([#722](https://www.github.com/googleapis/nodejs-pubsub/issues/722)) ([e65185b](https://www.github.com/googleapis/nodejs-pubsub/commit/e65185b))

## [0.31.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.30.3...v0.31.0) (2019-08-15)


### Features

* **debug:** capture stack trace in errors rather than message ([#718](https://www.github.com/googleapis/nodejs-pubsub/issues/718)) ([bfed3f1](https://www.github.com/googleapis/nodejs-pubsub/commit/bfed3f1))

### [0.30.3](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.30.2...v0.30.3) (2019-08-03)


### Bug Fixes

* allow calls with no request, add JSON proto ([1e73a69](https://www.github.com/googleapis/nodejs-pubsub/commit/1e73a69))

### [0.30.2](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.30.1...v0.30.2) (2019-07-30)


### ⚠ BREAKING CHANGES

* **message:** remove nack delay parameter (#668)

### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v2 ([#700](https://www.github.com/googleapis/nodejs-pubsub/issues/700)) ([a5c0160](https://www.github.com/googleapis/nodejs-pubsub/commit/a5c0160))
* **deps:** update dependency @grpc/grpc-js to ^0.5.0 ([#698](https://www.github.com/googleapis/nodejs-pubsub/issues/698)) ([d48e578](https://www.github.com/googleapis/nodejs-pubsub/commit/d48e578))
* **deps:** update dependency @sindresorhus/is to v1 ([#701](https://www.github.com/googleapis/nodejs-pubsub/issues/701)) ([e715172](https://www.github.com/googleapis/nodejs-pubsub/commit/e715172))
* **deps:** update dependency google-auth-library to v5 ([#702](https://www.github.com/googleapis/nodejs-pubsub/issues/702)) ([3a15956](https://www.github.com/googleapis/nodejs-pubsub/commit/3a15956))
* **docs:** reference docs should link to section of googleapis.dev with API reference ([#670](https://www.github.com/googleapis/nodejs-pubsub/issues/670)) ([c92a09a](https://www.github.com/googleapis/nodejs-pubsub/commit/c92a09a))


### Reverts

* **message:** remove nack delay parameter ([#668](https://www.github.com/googleapis/nodejs-pubsub/issues/668)) ([ca8fe65](https://www.github.com/googleapis/nodejs-pubsub/commit/ca8fe65))

### [0.30.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.30.0...v0.30.1) (2019-06-21)


### Bug Fixes

* **deps:** include missing @grpc/grpc-js dependency ([#665](https://www.github.com/googleapis/nodejs-pubsub/issues/665)) ([5f42f60](https://www.github.com/googleapis/nodejs-pubsub/commit/5f42f60))

## [0.30.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.29.1...v0.30.0) (2019-06-17)


### ⚠ BREAKING CHANGES

* **deps:** use grpc-js instead of grpc extension (#658)
* **subscription:** decouple retainAckedMessages from messageRetentionDuration (#625)
* remove pullTimeout subscriber option (#618)

### Bug Fixes

* **deps:** update dependency @sindresorhus/is to ^0.17.0 ([#591](https://www.github.com/googleapis/nodejs-pubsub/issues/591)) ([06fae6e](https://www.github.com/googleapis/nodejs-pubsub/commit/06fae6e))
* **deps:** update dependency grpc to v1.21.1 ([#629](https://www.github.com/googleapis/nodejs-pubsub/issues/629)) ([fcf75a2](https://www.github.com/googleapis/nodejs-pubsub/commit/fcf75a2))
* **deps:** update dependency p-defer to v3 ([#650](https://www.github.com/googleapis/nodejs-pubsub/issues/650)) ([50f9d4e](https://www.github.com/googleapis/nodejs-pubsub/commit/50f9d4e))
* **deps:** upgrade module extend to fix CVE-2018-16492 ([#644](https://www.github.com/googleapis/nodejs-pubsub/issues/644)) ([cd54630](https://www.github.com/googleapis/nodejs-pubsub/commit/cd54630))
* **deps:** use grpc-js instead of grpc extension ([#658](https://www.github.com/googleapis/nodejs-pubsub/issues/658)) ([535a917](https://www.github.com/googleapis/nodejs-pubsub/commit/535a917))
* **docs:** move to new client docs URL ([#657](https://www.github.com/googleapis/nodejs-pubsub/issues/657)) ([a9972ea](https://www.github.com/googleapis/nodejs-pubsub/commit/a9972ea))
* update regex to target correct comment ([#646](https://www.github.com/googleapis/nodejs-pubsub/issues/646)) ([9e8f245](https://www.github.com/googleapis/nodejs-pubsub/commit/9e8f245))
* update rpc timeout settings ([#628](https://www.github.com/googleapis/nodejs-pubsub/issues/628)) ([2a1a430](https://www.github.com/googleapis/nodejs-pubsub/commit/2a1a430))
* **subscription:** decouple retainAckedMessages from messageRetentionDuration ([#625](https://www.github.com/googleapis/nodejs-pubsub/issues/625)) ([3431e7c](https://www.github.com/googleapis/nodejs-pubsub/commit/3431e7c))
* **typescript:** pin grpc to previous working version ([#624](https://www.github.com/googleapis/nodejs-pubsub/issues/624)) ([2167536](https://www.github.com/googleapis/nodejs-pubsub/commit/2167536))


### Features

* add .repo-metadata.json, start generating README.md ([#636](https://www.github.com/googleapis/nodejs-pubsub/issues/636)) ([142f56c](https://www.github.com/googleapis/nodejs-pubsub/commit/142f56c))
* support apiEndpoint override ([#647](https://www.github.com/googleapis/nodejs-pubsub/issues/647)) ([b44f566](https://www.github.com/googleapis/nodejs-pubsub/commit/b44f566))


### Reverts

* remove pullTimeout subscriber option ([#618](https://www.github.com/googleapis/nodejs-pubsub/issues/618)) ([4fc9724](https://www.github.com/googleapis/nodejs-pubsub/commit/4fc9724))

### [0.29.1](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.29.0...v0.29.1) (2019-05-18)


### Bug Fixes

* use typescript import/export for gapics ([#611](https://www.github.com/googleapis/nodejs-pubsub/issues/611)) ([e882e1a](https://www.github.com/googleapis/nodejs-pubsub/commit/e882e1a))

## [0.29.0](https://www.github.com/googleapis/nodejs-pubsub/compare/v0.28.1...v0.29.0) (2019-05-15)


### Bug Fixes

* **deps:** update dependency @google-cloud/paginator to v1 ([#592](https://www.github.com/googleapis/nodejs-pubsub/issues/592)) ([181553a](https://www.github.com/googleapis/nodejs-pubsub/commit/181553a))
* **deps:** update dependency @google-cloud/precise-date to v1 ([#603](https://www.github.com/googleapis/nodejs-pubsub/issues/603)) ([2e669a1](https://www.github.com/googleapis/nodejs-pubsub/commit/2e669a1))
* **deps:** update dependency @google-cloud/projectify to v1 ([#588](https://www.github.com/googleapis/nodejs-pubsub/issues/588)) ([d01d010](https://www.github.com/googleapis/nodejs-pubsub/commit/d01d010))
* **deps:** update dependency @google-cloud/promisify to v1 ([#589](https://www.github.com/googleapis/nodejs-pubsub/issues/589)) ([dad7530](https://www.github.com/googleapis/nodejs-pubsub/commit/dad7530))
* **deps:** update dependency arrify to v2 ([#565](https://www.github.com/googleapis/nodejs-pubsub/issues/565)) ([8e3b7b8](https://www.github.com/googleapis/nodejs-pubsub/commit/8e3b7b8))
* **deps:** update dependency google-auth-library to v4 ([#601](https://www.github.com/googleapis/nodejs-pubsub/issues/601)) ([baf9d39](https://www.github.com/googleapis/nodejs-pubsub/commit/baf9d39))
* **deps:** update dependency google-gax to v1 ([#604](https://www.github.com/googleapis/nodejs-pubsub/issues/604)) ([6415e7c](https://www.github.com/googleapis/nodejs-pubsub/commit/6415e7c))
* DEADLINE_EXCEEDED no longer treated as idempotent and retried ([39b1dac](https://www.github.com/googleapis/nodejs-pubsub/commit/39b1dac))
* DEADLINE_EXCEEDED retry code is idempotent ([#605](https://www.github.com/googleapis/nodejs-pubsub/issues/605)) ([1ae8db9](https://www.github.com/googleapis/nodejs-pubsub/commit/1ae8db9))
* **deps:** update dependency google-gax to ^0.26.0 ([#583](https://www.github.com/googleapis/nodejs-pubsub/issues/583)) ([4214a4f](https://www.github.com/googleapis/nodejs-pubsub/commit/4214a4f))
* include 'x-goog-request-params' header in requests ([#562](https://www.github.com/googleapis/nodejs-pubsub/issues/562)) ([482e745](https://www.github.com/googleapis/nodejs-pubsub/commit/482e745))
* relax strictEqual to match RegExp ([#566](https://www.github.com/googleapis/nodejs-pubsub/issues/566)) ([3388fb7](https://www.github.com/googleapis/nodejs-pubsub/commit/3388fb7))
* **deps:** update dependency p-defer to v2 ([#553](https://www.github.com/googleapis/nodejs-pubsub/issues/553)) ([fe33e40](https://www.github.com/googleapis/nodejs-pubsub/commit/fe33e40))


### Build System

* upgrade engines field to >=8.10.0 ([#584](https://www.github.com/googleapis/nodejs-pubsub/issues/584)) ([2116474](https://www.github.com/googleapis/nodejs-pubsub/commit/2116474))


### Features

* **subscriber:** ordered messages ([1ae4719](https://www.github.com/googleapis/nodejs-pubsub/commit/1ae4719))
* **subscription:** accept pull timeout option ([#556](https://www.github.com/googleapis/nodejs-pubsub/issues/556)) ([468e1bf](https://www.github.com/googleapis/nodejs-pubsub/commit/468e1bf))
* **subscription:** ordered messages ([#560](https://www.github.com/googleapis/nodejs-pubsub/issues/560)) ([38502ad](https://www.github.com/googleapis/nodejs-pubsub/commit/38502ad))


### BREAKING CHANGES

* upgrade engines field to >=8.10.0 (#584)

## v0.28.1

03-11-2019 15:36 PDT

### Bug Fixes
- fix(typescript): correctly import long ([#541](https://github.com/googleapis/nodejs-pubsub/pull/541))

### Internal / Testing Changes
- testing: set skipLibCheck to false for ts install test ([#543](https://github.com/googleapis/nodejs-pubsub/pull/543))
- refactor: fix/simplify proto gen scripts ([#542](https://github.com/googleapis/nodejs-pubsub/pull/542))

## v0.28.0

03-11-2019 09:11 PDT

### New Features
- feat(topic): create setMetadata method ([#537](https://github.com/googleapis/nodejs-pubsub/pull/537))

### Dependencies
- fix(deps): update dependency @google-cloud/paginator to ^0.2.0

### Internal / Testing Changes
- build: Add docuploader credentials to node publish jobs ([#533](https://github.com/googleapis/nodejs-pubsub/pull/533))
- test: add missing packages and install test ([#536](https://github.com/googleapis/nodejs-pubsub/pull/536))
- refactor(typescript): noImplicitAny for Subscription test file ([#534](https://github.com/googleapis/nodejs-pubsub/pull/534))

## v0.27.1

03-06-2019 20:11 PST

### Bug Fixes
- fix(typescript): correct response type of `Subscription.get` ([#525](https://github.com/googleapis/nodejs-pubsub/pull/525))

### Documentation
- fix(typo): correct typo: recieved => received ([#527](https://github.com/googleapis/nodejs-pubsub/pull/527))

### Internal / Testing Changes
- build: update release configuration
- refactor(typescript): noImplicitAny for message-stream test file ([#522](https://github.com/googleapis/nodejs-pubsub/pull/522))
- build: use node10 to run samples-test, system-test etc ([#529](https://github.com/googleapis/nodejs-pubsub/pull/529))
- refactor: type fixes and some light housekeeping ([#528](https://github.com/googleapis/nodejs-pubsub/pull/528))

## v0.27.0

03-04-2019 08:42 PST


### Bug Fixes
- refactor(typescript): various fixes/refactors to types ([#515](https://github.com/googleapis/nodejs-pubsub/pull/515))
- fix(ts): fix getPolicy promise return signature ([#511](https://github.com/googleapis/nodejs-pubsub/pull/511))
- fix(typescript): export all the types ([#516](https://github.com/googleapis/nodejs-pubsub/pull/516))

### Dependencies
- refactor: clean up unused packages ([#517](https://github.com/googleapis/nodejs-pubsub/pull/517))

### Documentation
- fix(docs): ensure docs are not removed by typescript ([#512](https://github.com/googleapis/nodejs-pubsub/pull/512))
- docs: update comments on protos ([#509](https://github.com/googleapis/nodejs-pubsub/pull/509))

### Internal / Testing Changes
- refactor(typescript):noImplicitAny for index test file ([#502](https://github.com/googleapis/nodejs-pubsub/pull/502))
- refactor(ts): enable noImplicitAny for IAM test file ([#501](https://github.com/googleapis/nodejs-pubsub/pull/501))
- refactor(ts): enable noImplicitAny for lease-manager test file ([#508](https://github.com/googleapis/nodejs-pubsub/pull/508))
- refactor(ts): enable noImplicitAny for Histogram and Message_queues test file ([#510](https://github.com/googleapis/nodejs-pubsub/pull/510))
- refactor(ts): enable noImplicitAny for pubsub system test file ([#519](https://github.com/googleapis/nodejs-pubsub/pull/519))
- refactor(ts): noImplicitAny for publisher test file ([#520](https://github.com/googleapis/nodejs-pubsub/pull/520))

## v0.26.0

02-28-2019 05:42 PST

### BREAKING: `message.publishTime` is now represented by a [`PreciseDate`](https://github.com/googleapis/nodejs-precise-date) object. ([#503](https://github.com/googleapis/nodejs-pubsub/pull/503))

The `PreciseDate` class extends the native Date object, so most users should be unaffected by this change. The notable differences between PreciseDate and Date objects are:

- `toISOString()` now returns as a RFC 3339 formatted string.
- Nano and microsecond data is available via `date.getNanoseconds()` and `date.getMicroseconds()` respectively.

### New Features
- feat(typescript): ship typescript declaration files ([#498](https://github.com/googleapis/nodejs-pubsub/pull/498))
- feat(subscription): support push config auth methods ([#504](https://github.com/googleapis/nodejs-pubsub/pull/504))

### Internal / Testing Changes
- refactor(typescript): noImplicitAny for snapshot and subscriber test file ([#490](https://github.com/googleapis/nodejs-pubsub/pull/490))
- fix(messageStream): remove call to destroy grpc stream ([#499](https://github.com/googleapis/nodejs-pubsub/pull/499))

## v0.25.0

02-20-2019 10:35 PST

### Implementation Changes
- fix: throw on invalid credentials and update retry config ([#476](https://github.com/googleapis/nodejs-pubsub/pull/476))

The retry logic for **all** methods has changed. It is possible that this could go unnoticed, however if you suddenly start seeing errors in places that were previously quiet, this might account for said errors.

### New Features
- refactor(ts): improve TypeScript types ([#482](https://github.com/googleapis/nodejs-pubsub/pull/482))
- refactor(typescript): noImplicityAny for snapshot.ts and publisher.ts ([#457](https://github.com/googleapis/nodejs-pubsub/pull/457))

### Bug Fixes
- fix: ignore messages that come in after close ([#485](https://github.com/googleapis/nodejs-pubsub/pull/485))

### Dependencies
- chore(deps): update dependency mocha to v6 ([#488](https://github.com/googleapis/nodejs-pubsub/pull/488))
- fix(deps): update dependency @google-cloud/promisify to ^0.4.0 ([#478](https://github.com/googleapis/nodejs-pubsub/pull/478))
- fix(deps): update dependency yargs to v13 ([#475](https://github.com/googleapis/nodejs-pubsub/pull/475))
- fix(deps): update dependency duplexify to v4 ([#462](https://github.com/googleapis/nodejs-pubsub/pull/462))
- fix(deps): update dependency google-gax to ^0.25.0 ([#456](https://github.com/googleapis/nodejs-pubsub/pull/456))

### Documentation
- docs: update links in contrib guide ([#479](https://github.com/googleapis/nodejs-pubsub/pull/479))
- docs: update contributing path in README ([#471](https://github.com/googleapis/nodejs-pubsub/pull/471))
- chore: move CONTRIBUTING.md to root ([#470](https://github.com/googleapis/nodejs-pubsub/pull/470))
- docs: make mention of message change in changelog ([#469](https://github.com/googleapis/nodejs-pubsub/pull/469))
- docs: add lint/fix example to contributing guide ([#464](https://github.com/googleapis/nodejs-pubsub/pull/464))
- fix(sample): fix retry codes in retry sample code ([#458](https://github.com/googleapis/nodejs-pubsub/pull/458))

### Internal / Testing Changes
- test(samples): correctly handle publishTime value ([#495](https://github.com/googleapis/nodejs-pubsub/pull/495))
- test: fix publishTime issues ([#494](https://github.com/googleapis/nodejs-pubsub/pull/494))
- refactor(typescript): noImplicityAny for Topic test file ([#487](https://github.com/googleapis/nodejs-pubsub/pull/487))
- refactor(ts): noImplicitAny for subscription test file ([#489](https://github.com/googleapis/nodejs-pubsub/pull/489))
- build: use linkinator for docs test ([#477](https://github.com/googleapis/nodejs-pubsub/pull/477))
- build: create docs test npm scripts ([#474](https://github.com/googleapis/nodejs-pubsub/pull/474))
- build: test using @grpc/grpc-js in CI ([#472](https://github.com/googleapis/nodejs-pubsub/pull/472))
- test: update code style of smoke test ([#463](https://github.com/googleapis/nodejs-pubsub/pull/463))
- test: make smoke test spam less ([#459](https://github.com/googleapis/nodejs-pubsub/pull/459))

## v0.24.1

01-29-2019 13:17 PST

### Bug Fixes

- fix(publisher): unbound max send message size ([#454](https://github.com/googleapis/nodejs-pubsub/pull/454))

## v0.24.0

01-28-2019 09:54 PST

### New Features
- fix(auth): pass project id to gax clients ([#447](https://github.com/googleapis/nodejs-pubsub/pull/447))
- refactor(typescript): noImplicityAny for topic.ts and subscription.ts ([#420](https://github.com/googleapis/nodejs-pubsub/pull/420))
- refactor: improve subscriber error handling ([#440](https://github.com/googleapis/nodejs-pubsub/pull/440))
- feat(subscription): auto close sub on non-recoverable errors ([#441](https://github.com/googleapis/nodejs-pubsub/pull/441))

### Dependencies
- chore(deps): update dependency eslint-config-prettier to v4 ([#450](https://github.com/googleapis/nodejs-pubsub/pull/450))
- fix(deps): update dependency google-gax to ^0.24.0 ([#444](https://github.com/googleapis/nodejs-pubsub/pull/444))
- fix(deps): update dependency google-auth-library to v3 ([#433](https://github.com/googleapis/nodejs-pubsub/pull/433))

### Documentation
- build: ignore googleapis.com in doc link check ([#439](https://github.com/googleapis/nodejs-pubsub/pull/439))
- chore: update year in the license headers. ([#434](https://github.com/googleapis/nodejs-pubsub/pull/434))

### Internal / Testing Changes
- chore: remove trailing whitespace in package.json
- fix(sample): factor setTimeout jitter into assertion ([#449](https://github.com/googleapis/nodejs-pubsub/pull/449))
- fix(test): broken snapshot test hook ([#448](https://github.com/googleapis/nodejs-pubsub/pull/448))

## v0.23.0

01-16-2019 13:09 PST

**This release has breaking changes.**

#### BREAKING: `Topic#publisher()` has been removed in favor of `Topic#publish()` ([#426](https://github.com/googleapis/nodejs-pubsub/pull/426))

Before
```js
const publisher = topic.publisher(publishOptions);
await publisher.publish(Buffer.from('Hello, world!'));
```

After
```js
topic.setPublishOptions(publishOptions);
await topic.publish(Buffer.from('Hello, world!'));
```

#### BREAKING: `Subscription` options have changed. ([#388](https://github.com/googleapis/nodejs-pubsub/pull/388))

Before
```js
const subscription = topic.subscription('my-sub', {
  batching: {
    maxMilliseconds: 100,
  },
  flowControl: {
    maxBytes: os.freem() * 0.2,
    maxMessages: 100,
  },
  maxConnections: 5,
});
```

After
```js
const subscription = topic.subscription('my-sub', {
  ackDeadline: 10,
  batching: {
    callOptions: {}, // gax call options
    maxMessages: 3000,
    maxMilliseconds: 100,
  },
  flowControl: {
    allowExcessMessages: true,
    maxBytes: os.freem() * 0.2,
    maxExtension: Infinity,
    maxMessages: 100
  },
  streamingOptions: {
    highWaterMark: 0,
    maxStreams: 5, // formerly known as maxConnections
    timeout: 60000 * 5, // 5 minutes
  }
});
```

#### BREAKING: messages are no longer plain objects. ([#388](https://github.com/googleapis/nodejs-pubsub/pull/388))

Messages were refactored into a [class](https://github.com/googleapis/nodejs-pubsub/blob/52305c7ee5bbc9caba1369a45ae7fdcdeba1c89b/src/subscriber.ts#L59),
this will only affect (some) users who treat messages like plain old objects.

The following example is something that would have worked previously, but will
now throw a `TypeError` since `ack` lives on the prototype chain.

```js
const m = Object.assign({}, message, customData);
m.ack(); // TypeError: m.ack is not a function
```

### New Features
- feat(topic): create method for publishing json ([#430](https://github.com/googleapis/nodejs-pubsub/pull/430))

### Dependencies
- fix(deps): update dependency google-gax to ^0.23.0 ([#423](https://github.com/googleapis/nodejs-pubsub/pull/423))
- chore(deps): update dependency @types/sinon to v7 ([#411](https://github.com/googleapis/nodejs-pubsub/pull/411))
- chore: update nyc and eslint configs ([#409](https://github.com/googleapis/nodejs-pubsub/pull/409))

### Documentation
- docs(samples): correct publish retry settings ([#419](https://github.com/googleapis/nodejs-pubsub/pull/419))
- docs: sync generated grpc message type docs
- fix(docs): remove unused long running operations and IAM types
- fix: modernize the sample tests ([#414](https://github.com/googleapis/nodejs-pubsub/pull/414))

### Internal / Testing Changes
- chore: update subscriber gapic
- fix: add getSubscriberStub to synth file ([#425](https://github.com/googleapis/nodejs-pubsub/pull/425))
- build: check broken links in generated docs ([#416](https://github.com/googleapis/nodejs-pubsub/pull/416))
- chore(build): inject yoshi automation key ([#410](https://github.com/googleapis/nodejs-pubsub/pull/410))
- chore: fix publish.sh permission +x ([#406](https://github.com/googleapis/nodejs-pubsub/pull/406))
- fix(build): fix Kokoro release script ([#404](https://github.com/googleapis/nodejs-pubsub/pull/404))

## v0.22.2

12-10-2018 09:37 PST

### Implementation Changes
*TypeScript related changes:*
- fix(ts): copy gapic code properly ([#399](https://github.com/googleapis/nodejs-pubsub/pull/399))

### Documentation
- fix(docs): add subscription expiration policy docs ([#400](https://github.com/googleapis/nodejs-pubsub/pull/400))
- Add migration for v0.20.0 from v0.19.0 ([#398](https://github.com/googleapis/nodejs-pubsub/pull/398))

## v0.22.1

12-06-2018 17:11 PST

### Dependencies
- chore(deps): update dependency typescript to ~3.2.0 ([#380](https://github.com/googleapis/nodejs-pubsub/pull/380))

### Documentation
- fix(docs): place doc comment above the last overload ([#393](https://github.com/googleapis/nodejs-pubsub/pull/393))
- docs: Update documentation for Subscription ([#387](https://github.com/googleapis/nodejs-pubsub/pull/387))
- docs: Add documentation about defaults for publisher ([#384](https://github.com/googleapis/nodejs-pubsub/pull/384))
- docs: update readme badges ([#383](https://github.com/googleapis/nodejs-pubsub/pull/383))

### Internal / Testing Changes
- chore: always nyc report before calling codecov ([#392](https://github.com/googleapis/nodejs-pubsub/pull/392))
- chore: nyc ignore build/test by default ([#391](https://github.com/googleapis/nodejs-pubsub/pull/391))
- chore: update license file ([#386](https://github.com/googleapis/nodejs-pubsub/pull/386))

## v0.22.0

### Implementation Changes
- fix(ts): do not ship types ([#377](https://github.com/googleapis/nodejs-pubsub/pull/377))

#### Road to TypeScript
- refactor(ts): improve types (2) ([#356](https://github.com/googleapis/nodejs-pubsub/pull/356))
- refactor(ts): updated lint and fix command to cover gts ([#375](https://github.com/googleapis/nodejs-pubsub/pull/375))
- refactor(ts): added ts style fix for src/iam.ts ([#352](https://github.com/googleapis/nodejs-pubsub/pull/352))
- refactor(ts): Added ts style fix for test/topic.ts ([#373](https://github.com/googleapis/nodejs-pubsub/pull/373))
- refactor(ts): Added ts style fix for test/subscription.ts ([#372](https://github.com/googleapis/nodejs-pubsub/pull/372))
- refactor(ts): Added ts style fix for test/subscriber.ts ([#371](https://github.com/googleapis/nodejs-pubsub/pull/371))
- refactor(ts): Added ts style fix for test/snapshot.ts ([#370](https://github.com/googleapis/nodejs-pubsub/pull/370))
- refactor(ts): Added ts style fix for test/publisher.ts ([#369](https://github.com/googleapis/nodejs-pubsub/pull/369))
- refactor(ts): added ts style fix for src/index.ts ([#351](https://github.com/googleapis/nodejs-pubsub/pull/351))
- refactor(ts): added ts style fix for src/publisher.ts ([#357](https://github.com/googleapis/nodejs-pubsub/pull/357))
- refactor(ts): added ts style fix for src/snapshot.ts ([#358](https://github.com/googleapis/nodejs-pubsub/pull/358))
- refactor(ts): added ts style fix for src/subscriber.ts ([#359](https://github.com/googleapis/nodejs-pubsub/pull/359))
- refactor(ts): added ts style fix for src/subscription.ts ([#360](https://github.com/googleapis/nodejs-pubsub/pull/360))
- refactor(ts): added ts style fix for src/topic.ts ([#361](https://github.com/googleapis/nodejs-pubsub/pull/361))
- refactor(ts): added ts style fix for src/util.ts ([#362](https://github.com/googleapis/nodejs-pubsub/pull/362))
- refactor(ts): added ts style fix for test/connection-pool.ts ([#364](https://github.com/googleapis/nodejs-pubsub/pull/364))
- refactor(ts): added ts style fix for test/histogram.ts ([#365](https://github.com/googleapis/nodejs-pubsub/pull/365))
- refactor(ts): added ts style fix for test/iam.ts ([#366](https://github.com/googleapis/nodejs-pubsub/pull/366))
- refactor(ts): added ts style fix for test/index.ts ([#368](https://github.com/googleapis/nodejs-pubsub/pull/368))
- refactor(ts): added ts style fix for src/connection-pool.ts ([#353](https://github.com/googleapis/nodejs-pubsub/pull/353))
- refactor(ts): added ts style fix for src/histogram.ts ([#354](https://github.com/googleapis/nodejs-pubsub/pull/354))
- refactor(ts): enable noImplicitAny on src/iam.ts ([#348](https://github.com/googleapis/nodejs-pubsub/pull/348))
- added ts style fix for system-test/pubsub.ts ([#374](https://github.com/googleapis/nodejs-pubsub/pull/374))
- chore: ts-ignoring some stuff in tests ([#343](https://github.com/googleapis/nodejs-pubsub/pull/343))

### Dependencies
- fix: Pin @types/sinon to last compatible version ([#345](https://github.com/googleapis/nodejs-pubsub/pull/345))
- chore(deps): update dependency @types/sinon to v5.0.7 ([#349](https://github.com/googleapis/nodejs-pubsub/pull/349))

### Documentation
- docs(samples): Publish with Retry Setting Example ([#355](https://github.com/googleapis/nodejs-pubsub/pull/355))
- docs: remove outdated comments ([#342](https://github.com/googleapis/nodejs-pubsub/pull/342))

### Internal / Testing Changes
- chore: add a synth.metadata
- feat: Add optional delay when calling nack() ([#255](https://github.com/googleapis/nodejs-pubsub/pull/255)) ([#256](https://github.com/googleapis/nodejs-pubsub/pull/256))

## v0.21.1

### Bug fixes
- fix: include protos in the package ([#336](https://github.com/googleapis/nodejs-pubsub/pull/336))

## v0.21.0

11-12-2018 17:25 PST

### Implementation Changes

**BREAKING CHANGE**
`@google-cloud/pubsub` now uses ES6 import/export syntax since v0.21.0.

Before:
```javascript
const pubsub = require('@google-cloud/pubsub')();
// OR
const PubSub = require('@google-cloud/pubsub');
const pubsub = new PubSub();
```
Now:
```javascript
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
```

- refactor: use Object.assign where possible ([#324](https://github.com/googleapis/nodejs-pubsub/pull/324))
- fix(subscription): promisify Subscription#close ([#282](https://github.com/googleapis/nodejs-pubsub/pull/282))
- fix: maxBytes batching sending empty messages ([#281](https://github.com/googleapis/nodejs-pubsub/pull/281))
- (New) Synchronous Pull with Lease Management  ([#272](https://github.com/googleapis/nodejs-pubsub/pull/272))
- Switch to let/const ([#254](https://github.com/googleapis/nodejs-pubsub/pull/254))

#### Road to TypeScript
- refactor(ts): introduce a round of types ([#319](https://github.com/googleapis/nodejs-pubsub/pull/319))
- refactor(ts): enable noImplicitThis ([#316](https://github.com/googleapis/nodejs-pubsub/pull/316))
- refactor(ts): convert to typescript ([#310](https://github.com/googleapis/nodejs-pubsub/pull/310))

### New Features
- feat: add expiration policy ([#287](https://github.com/googleapis/nodejs-pubsub/pull/287))

### Dependencies
- chore(deps): update dependency eslint-plugin-prettier to v3 ([#274](https://github.com/googleapis/nodejs-pubsub/pull/274))
- fix(deps): update dependency google-proto-files to ^0.17.0 ([#284](https://github.com/googleapis/nodejs-pubsub/pull/284))
- chore(deps): update dependency sinon to v7 ([#285](https://github.com/googleapis/nodejs-pubsub/pull/285))
- chore(deps): update dependency eslint-plugin-node to v8 ([#300](https://github.com/googleapis/nodejs-pubsub/pull/300))
- fix(deps): update dependency through2 to v3 ([#320](https://github.com/googleapis/nodejs-pubsub/pull/320))
- refactor: drop dependencies on google-proto-files and async ([#329](https://github.com/googleapis/nodejs-pubsub/pull/329))
- chore(deps): update dependency @google-cloud/nodejs-repo-tools to v3 ([#328](https://github.com/googleapis/nodejs-pubsub/pull/328))
- chore(deps): update dependency @types/is to v0.0.21 ([#323](https://github.com/googleapis/nodejs-pubsub/pull/323))
- fix(deps): update dependency google-gax to ^0.20.0 ([#252](https://github.com/googleapis/nodejs-pubsub/pull/252))

### Documentation
- fix quickstart tag in v0.20 docs ([#271](https://github.com/googleapis/nodejs-pubsub/pull/271))

### Samples
- Pub/Sub Synchronous Pull Example ([#259](https://github.com/googleapis/nodejs-pubsub/pull/259))
- Update sample topic and subscription names
-  Add Pub/Sub ack deadline example ([#315](https://github.com/googleapis/nodejs-pubsub/pull/315))
- docs(samples): update samples to use async/await ([#305](https://github.com/googleapis/nodejs-pubsub/pull/305))
- chore: adjust samples timeout ([#283](https://github.com/googleapis/nodejs-pubsub/pull/283))
- Fix the topic name in the samples ([#262](https://github.com/googleapis/nodejs-pubsub/pull/262))

### Internal / Testing Changes
- chore: update eslintignore config ([#332](https://github.com/googleapis/nodejs-pubsub/pull/332))
- chore(build): eslint all js files, and use js for all generated files ([#331](https://github.com/googleapis/nodejs-pubsub/pull/331))
- chore: drop contributors from multiple places ([#325](https://github.com/googleapis/nodejs-pubsub/pull/325))
- chore: use latest npm on Windows ([#322](https://github.com/googleapis/nodejs-pubsub/pull/322))
- chore: update CircleCI config ([#309](https://github.com/googleapis/nodejs-pubsub/pull/309))
- chore: include build in eslintignore ([#304](https://github.com/googleapis/nodejs-pubsub/pull/304))
- chore: update issue templates ([#299](https://github.com/googleapis/nodejs-pubsub/pull/299))
- chore: remove old issue template ([#297](https://github.com/googleapis/nodejs-pubsub/pull/297))
- build: run tests on node11 ([#296](https://github.com/googleapis/nodejs-pubsub/pull/296))
- chores(build): do not collect sponge.xml from windows builds ([#295](https://github.com/googleapis/nodejs-pubsub/pull/295))
- chores(build): run codecov on continuous builds ([#294](https://github.com/googleapis/nodejs-pubsub/pull/294))
- chore: update new issue template ([#293](https://github.com/googleapis/nodejs-pubsub/pull/293))
- build: fix codecov uploading on Kokoro ([#286](https://github.com/googleapis/nodejs-pubsub/pull/286))
- Update kokoro config ([#275](https://github.com/googleapis/nodejs-pubsub/pull/275))
- Update Kokoro configs ([#270](https://github.com/googleapis/nodejs-pubsub/pull/270))
- Update kokoro config ([#269](https://github.com/googleapis/nodejs-pubsub/pull/269))
- test: remove appveyor config ([#268](https://github.com/googleapis/nodejs-pubsub/pull/268))
- Update CI config ([#266](https://github.com/googleapis/nodejs-pubsub/pull/266))
- Run prettier on smoke tests ([#265](https://github.com/googleapis/nodejs-pubsub/pull/265))
- Fix the linter ([#261](https://github.com/googleapis/nodejs-pubsub/pull/261))
- Enable prefer-const in the eslint config ([#260](https://github.com/googleapis/nodejs-pubsub/pull/260))
- Enable no-var in eslint ([#257](https://github.com/googleapis/nodejs-pubsub/pull/257))

## v0.20.1

### Documentation
 - fix(docs): correct region tag for sample documentation (#272)

## v0.20.0

### Implementation Changes

*BREAKING CHANGE*: - fix: drop support for node.js 4.x and 9.x (#171)


**BREAKING CHANGE**
`@google-cloud/pubsub` now requires `new`.

Before:
```javascript
const PubSub = require('@google-cloud/pubsub');
const pubsub = PubSub();
```
Now:
```javascript
const PubSub = require('@google-cloud/pubsub');
const pubsub = new PubSub();
```

### New Features

- Re-generate library using /synth.py (#227)
   - some minor proto documentation changes

### Dependencies

- fix(deps): update dependency google-auth-library to v2 (#228)
- chore(deps): update dependency nyc to v13 (#225)
- fix(deps): update dependency google-gax to ^0.19.0 (#216)
- chore(deps): update dependency eslint-config-prettier to v3 (#213)
- chore: drop dependency on @google-cloud/common (#210)
- fix(deps): update dependency @google-cloud/common to ^0.21.0 (#206)
- chore(deps): lock file maintenance (#203)
- fix(deps): update dependency google-gax to ^0.18.0 (#197)
- chore(deps): lock file maintenance (#196)
- chore(deps): lock file maintenance (#188)
- chore(deps): update dependency eslint-plugin-node to v7 (#185)
- chore(deps): lock file maintenance (#182)
- chore(deps): lock file maintenance (#174)
- chore(deps): lock file maintenance (#173)
- chore(deps): lock file maintenance (#172)
- chore(deps): lock file maintenance (#168)
- chore(deps): lock file maintenance (#167)
- chore(deps): lock file maintenance (#166)
- fix(deps): update dependency delay to v3 (#165)
- fix(deps): update dependency @google-cloud/common to ^0.20.0 (#155)
- chore(deps): update dependency proxyquire to v2 (#160)
- chore(deps): update dependency nyc to v12 (#159)
- Update google-gax and add Synth.py (#158)
- chore(deps): update dependency sinon to v6 (#161)
- fix(deps): update dependency yargs to v12 (#164)
- fix(deps): update dependency yargs to v11 (#163)
- fix(deps): update dependency yargs to v10.1.2 (#157)
- chore(deps): update dependency ava to ^0.25.0 (#153)
- chore(deps): update dependency sinon to v4.5.0 (#154)

### Documentation

- fix docs (#229)
- test: fix import sample failures (#218)
- fix: correct the documentation (#117)
- fix: Fix sample region tag in JSDoc (#184)
- Fixes 179: Adds missing return statement in docs (#180)

### Internal / Testing Changes

- Update the CI config (#220)
- chore: make the CircleCI config consistent
- chore: use arrow functions (#215)
- chore: convert to es classes (#211)
- chore: do not use npm ci (#209)
- chore: use let and const (#204)
- chore: ignore package-lock.json (#207)
- chore: use split common modules (#200)
- chore: update renovate config (#199)
- chore: move mocha options to mocha.opts (#194)
- chore: require node 8 for samples (#195)
- chore: add node templates to synth.py (#191)
- chore: fix the eslint errors (#190)
- refactor: use google-auth-library (#189)
- Fixes 177: Prevents publishing attributes that have non-string values (#183)
- chore(build): use `npm ci` instead of `npm install` (#175)
- chore(package): update eslint to version 5.0.0 (#145)
- chore: update sample lockfiles (#149)
- test: use strictEqual in tests (#186)
- Configure Renovate (#144)
- refactor: drop repo-tool as an exec wrapper (#150)
- fix: update linking for samples (#146)
